import {createBrowserRouter} from "react-router-dom";
import Accueil from "../Components/Accueil";
import Etudiants from "../Components/Etudiants";
import Enseignant from "../Components/Enseignant";
import Matiere from "../Components/Matiere";
import Note from "../Components/Note";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Accueil/>
    },
    {
        path: "/accueil",
        element: <Accueil/>
    },
    {
        path: "/etudiants",
        element: <Etudiants/>
    },
    {
        path: "/enseignants",
        element: <Enseignant/>
    },
    {
        path: "/matiere",
        element: <Matiere/>
    },
    {
        path: "/note",
        element: <Note/>
    }
])

export default router;