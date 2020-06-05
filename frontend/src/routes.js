import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} />

            <Route path="/profile" component={Profile} />
            <Route path="/incidents/new" component={NewIncident} />
         </Switch>
      </BrowserRouter>
   );
}

/**
 * BrowserRouter: responsável por informar pra nossa aplicação que a partir de 
 * onde ele é chamado teremos um roteamento de componentes
 * 
 * Switch: é um componente que recebe vários componentes Route e dado o caminho 
 * que for passado na URL um deles é renderizado
 * 
 * Route: é uma rota do nosso sistema, e devemos passar pra ele qual vai ser o caminho 
 * da url por meio de um atributo path="" e dado esse path, um outro atributo com o nosso 
 * componente que foi importado chamado component={ComponenteDoPath}
 */