import { Avatar, Typography } from "@mui/material";
import { type Id, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const autoClose = 5000;

export const AlertaContainer = () => (
  <ToastContainer
    position="bottom-left"
    autoClose={autoClose}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Slide}
  />
);

const aguarde = (): Id =>
  toast.loading(
    <Typography sx={{ marginLeft: 4 }}>Aguarde...</Typography>,
    {
      icon: () => <Avatar src={"../assets/opa.gif"} alt="Carregando..." />,
    }
  );

type TipoResposta<T> = {
  eCerto: boolean;
  valor?: T;
  mensagem?: string;
};

const exibir = (res: TipoResposta<any>, id?: Id): Id => {
  console.table(res);

  if (!id)
    return res.eCerto
      ? toast.success(String(res.valor), {})
      : toast.error(res.mensagem || "Erro desconhecido", {});
  else {
    res.eCerto
      ? toast.update(id, {
          render: String(res.valor),
          type: "success",
          icon: null,
          isLoading: false,
          autoClose,
          hideProgressBar: false,
        })
      : toast.update(id, {
          render: res.mensagem || "Erro desconhecido",
          type: "error",
          icon: null,
          isLoading: false,
          autoClose,
          hideProgressBar: false,
        });

    return id;
  }
};

class ClasseAlerta {
  private id: Id | undefined;

  aguarde() {
    this.id = aguarde();
    return this;
  }

  exibir(res: TipoResposta<any>) {
    this.id = exibir(res, this.id);
    return this;
  }

  async promisse<T>(
    p: () => Promise<T>,
    transformar?: (valor: T) => TipoResposta<string>
  ): Promise<T> {
    this.aguarde();
    try {
      const res = await p();
      transformar ? this.exibir(transformar(res)) : this.fechar();
      return res;
    } catch (error) {
      this.erroCatch(error);
      throw error;
    }
  }

  fechar() {
    toast.dismiss(this.id);
  }

  erro(mensagem: string) {
    this.exibir({ eCerto: false, mensagem });
    return this;
  }

  erroCatch(erro: any) {
    const erroResposta: TipoResposta<any> = {
      eCerto: false,
      mensagem: erro.response?.data?.mensagem
        ? erro.response?.data?.mensagem
        : erro.message
        ? erro.message
        : erro.response?.data
        ? erro.response?.data
        : "Erro desconhecido",
    };

    this.exibir(erroResposta);
    return this;
  }

  sucesso(mensagem: string) {
    this.exibir({ eCerto: true, valor: mensagem });
    return this;
  }
}

export const Alerta = () => new ClasseAlerta();
