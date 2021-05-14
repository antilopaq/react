import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//imports from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//css
import '../css/style.css'
//elements
import Enavbar from '../elements/navbar';
import Efooter from '../elements/footer';
//pages
import Index from '../pages/Index';
import Stiri from '../pages/Stiri';
import Stire1 from '../pages/1';
//

function App() {
    return (
        <Router>
            <div className="App">
                <div className="logo-fixed-top"></div>
                <Enavbar />
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/Stiri" exact component={Stiri} />
                    <Route path="/1" exact component={Stire1} />
                </Switch>
                <Efooter />
            </div>
        </Router>
    )
}

export default App;