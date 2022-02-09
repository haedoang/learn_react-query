import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './layout/Header';
import Home from './Home';
import UseQuery from './useQuery';
import UseQueries from './useQueries';
import UseInfiniteQuery from './useInfiniteQuery';
import UseMutation from './useMutation';
import DependentQueries from './useDependentQueries'

const RouterComponent = () =>  {
    return (
            <Router>
                <Header />
                <Route exact path="/" component={Home}/>
                <Route path="/useQuery" component={UseQuery} />
                <Route path="/useQueries" component={UseQueries} />
                <Route path="/useInfiniteQuery" component={UseInfiniteQuery} />
                <Route path="/useMutation" component={UseMutation} />
                <Route path="/dependant-queries" component={DependentQueries}/>
            </Router>
        )
}


 export default RouterComponent;