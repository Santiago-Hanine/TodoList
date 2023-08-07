import React from "react";
import { TodoIcon } from "./index";

function DeletIcon({onDelete}) {
    return(
        <TodoIcon 
        type="delete"
        color="gray"
        onClick={onDelete}
        />
    );
}

export { DeletIcon };