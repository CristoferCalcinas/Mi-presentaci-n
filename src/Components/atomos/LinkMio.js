import { Link } from "@mui/material";


export default function LinkMio({ text }) {
    return (
        <Link href="#" underline="hover" sx={{ textAlign: "center" }} px={10}>
            {text}
        </Link>
    )
}
