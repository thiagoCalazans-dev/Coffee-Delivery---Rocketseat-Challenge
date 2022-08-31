import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Title } from "../../styles";
import {
  Adress,
  Card,
  FormContainer,
  FormControl,
  FormControlNeighborhood,
  InformationCard,
  InputWrapper,
  RadioGroupControl,
  UserInformationsContainer,
} from "./styles";

export const UserInformations = () => {
  return (
    <UserInformationsContainer>
      <Title>Complete seu pedido</Title>
      <FormContainer>
        <Card>
          <InformationCard>
            <MapPinLine size={22} color="#C47F17" />
            <span>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
          </InformationCard>
          <Adress>
            <input placeholder="CEP" />
            <input placeholder="Rua" />
            <FormControl>
              <input placeholder="Número" />
              <InputWrapper>
                <input placeholder="Complemento" />
              </InputWrapper>
            </FormControl>
            <FormControlNeighborhood>
              <input placeholder="Bairro" />
              <input placeholder="Cidade" />
              <input placeholder="UF" />
            </FormControlNeighborhood>
          </Adress>{" "}
        </Card>
        <Card>
          <InformationCard>
            <CurrencyDollar size={22} color="#8047F8" />
            <span>
              <strong>Pagamento</strong>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </span>
          </InformationCard>
          <RadioGroupControl>
            <input type="radio" name="payment-options" id="credit-card" />
            <label htmlFor="credit-card" tabIndex={0}>
              <CreditCard size={16} color="#8047F8" />
              cartão de crédito
            </label>
            <input type="radio" name="payment-options" id="debit-card" />
            <label htmlFor="debit-card" tabIndex={0}>
              <Bank size={16} color="#8047F8" />
              cartão de débito
            </label>
            <input type="radio" name="payment-options" id="money" />
            <label htmlFor="money" tabIndex={0}>
              <Money size={16} color="#8047F8" />
              dinheiro
            </label>
          </RadioGroupControl>
        </Card>
      </FormContainer>
    </UserInformationsContainer>
  );
};
