import { SLink, Container } from '../Style';
import { withRouter } from 'react-router-dom';

const Header = ({ path, location , history}) => {
    console.log(path, location, history);


    return (
        <Container>
            <SLink to ="/" selected={ location.pathname === "/"}>home</SLink>
            <SLink to="/useQuery" selected={ location.pathname === "/useQuery"}>useQuery</SLink>
            <SLink to="/useQueries" selected={ location.pathname === "/useQueries"}>useQueries</SLink>
            <SLink to="/useQuer3y">useQuery3</SLink>
        </Container>
    )
}

export default withRouter(Header);