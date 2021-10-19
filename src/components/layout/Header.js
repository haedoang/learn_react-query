import { SLink, Container } from '../Style';
import { withRouter } from 'react-router-dom';

const Header = ({ path, location , history}) => {
    console.log(path, location, history);


    return (
        <Container>
            <SLink to ="/" selected={ location.pathname === "/"}>home</SLink>
            <SLink to="/useQuery" selected={ location.pathname === "/useQuery"}>useQuery</SLink>
            <SLink to="/useQueries" selected={ location.pathname === "/useQueries"}>useQueries</SLink>
            <SLink to="/useInfiniteQuery" selected={ location.pathname === "/useInfiniteQuery"}>useInfiniteQuery</SLink>
            <SLink to="/useMutation" selected={ location.pathname === "/useMutation"}>useMutation</SLink>
        </Container>
    )
}

export default withRouter(Header);