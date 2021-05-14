import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="title">Desenvolvimento de um website</td>
            <td className="deposite">R$ 12.000</td>
            <td>Trabalho</td>
            <td>12/12/20</td>
          </tr>

          <tr>
            <td className="title">Aluguel</td>
            <td className="withdraw">- R$ 2.000</td>
            <td>Moradia</td>
            <td>12/02/20</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
