import React, {FC} from "react";
import './Header.css';
interface HeaderProps {
}
//Functional component to define Header
export const Header: FC<HeaderProps> = () =>
<div className="headerContainer">
            <h2>Weather Australia</h2>
        </div>