import React from "react";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import Banner from "./Components/imgs/BannerPrincipal2.svg";
import  Personagens  from "./Components/Pages/Personagens";
import PageHome from "./Components/Pages/PageHome"
import { setConstantValue } from "typescript";

const Main = styled.div`
  background-color: black;
`;


class App extends React.Component {
  state = {
    page : false 
  }
  changePage = () =>{
    this.setState({page : true})
  }
  render() {
    const page = this.state.page ? <Personagens /> : <PageHome changePage={this.changePage} />;

    return (
      <Main>
        {page}
      </Main>
    );
  }
}

export default App;
