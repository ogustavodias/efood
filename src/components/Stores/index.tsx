import { useGetStoresQuery } from "../../services/api";

import Loader from "../Loader";

import * as S from "./styles";

const StoreList = () => {
  const { data, isLoading, isError } = useGetStoresQuery(undefined);

  if (isLoading) return <Loader />;
  if (isError) return <p>Ocorreu um erro</p>;
  if (!data) return null;
  if (!data) return null;

  // Else
  return (
    <S.StoreList>
      {data.map((item) => (
        <S.Card key={item.id}>
          <S.Tags>
            {item.destacado && <span>Destaque da semana</span>}
            <span>{item.tipo}</span>
          </S.Tags>
          <img src={item.capa} alt="store image" />
          <S.Infos>
            <div>
              <S.Name>{item.titulo}</S.Name>
              <S.Rate>{item.avaliacao}</S.Rate>
            </div>
            <S.Description>{item.descricao}</S.Description>
            <S.KnowMore to={`perfil/${item.id}`}>Saiba mais</S.KnowMore>
          </S.Infos>
        </S.Card>
      ))}
    </S.StoreList>
  );
};

export default StoreList;
