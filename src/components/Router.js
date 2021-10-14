import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './layout/Header';
import Home from './Home';
import UseQuery from './useQuery';
import UseQueries from './useQueries';

const RouterComponent = () =>  {
 
    return (
            <Router>
                <Header />
                <Route exact path="/" component={Home}/>
                <Route path="/useQuery" component={UseQuery} />
                <Route path="/useQueries" component={UseQueries} />
                <Redirect path="*" to="/"/>
            </Router>
        )
}


 export default RouterComponent;