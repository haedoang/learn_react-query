import { SLink, Container } from '../Style';
import { withRouter } from 'react-router-dom';

const Header = ({ location }) => {
    return (
        <Container>
            <SLink to ="/" selected={ location.pathname === "/"}>home</SLink>
            <SLink to="/useQuery" selected={ location.pathname === "/useQuery"}>useQuery</SLink>
            <SLink to="/useQueries" selected={ location.pathname === "/useQueries"}>useQueries</SLink>
            <SLink to="/useInfiniteQuery" selected={ location.pathname === "/useInfiniteQuery"}>useInfiniteQuery</SLink>
            <SLink to="/useMutation" selected={ location.pathname === "/useMutation"}>useMutation</SLink>
            <SLink to="/dependant-queries" selected={ location.pathname === "/useDependentQueries"}>Depenent-Queries</SLink>
        </Container>
    )
}

export default withRouter(Header);