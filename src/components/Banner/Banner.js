import './Banner.css'

export const Banner = () => {
    //JSX (Parece html mas não é) - Como o react trabalha com a parte visual. Ele vai entender o que é e depois faz o append no DOM.
    return (
        <header className="banner">
        <img src="/img/banner.png" alt="O banner principal da página do Organo." />
        </header>
    )
}

