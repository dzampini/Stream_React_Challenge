import { useState } from "react";

export default function Peliculas() {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="App">
            <h1>Cargando...</h1>
        </div>
    );
}