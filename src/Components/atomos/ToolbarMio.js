import { Toolbar, Typography } from "@mui/material";


export default function ToolbarMio({title}) {
    return (
        <Toolbar>
            <Typography variant="h6">{title}</Typography>
        </Toolbar>
    )
}
