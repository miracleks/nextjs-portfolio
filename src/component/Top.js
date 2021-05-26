import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <img src="/images/logo.png" alt="logo" />
            <Header as="h1">We are one</Header>
            <Gnb />
        </div>
    )
}