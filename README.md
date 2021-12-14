<h1 align = "center" class = "line-1 anim-typewriter"> Página inicial do Art Gallery WebSite </h1>



<img align = "center" class = "img__project" src = "./ screen.gif">

<div align = "center" class = "links">
    <a href="#the_challenge"> O desafio </a> |
     <a href="#links"> Links </a> |
      <a href="#built_with"> Construído com </a> |
       <a href="#what_i_learned"> O que aprendi </a> |
       <a href="#resources"> Recursos </a> |
       <a href="#author"> Autor </a>
</div>

<h2 id = "the_challenge"> 🌋 O desafio </h2>

Seu desafio é construir esta página de destino e torná-la o mais parecida possível com o design possível. <br>
Seus usuários devem ser capazes de:

- Veja o layout ideal, dependendo do tamanho da tela do dispositivo
- Veja estados de foco para elementos interativos
- Capacidade de clicar na imagem e abrir em tela cheia um verção com maior qualidade



<h2 id = "links"> 🔗 Links </h2>

- URL da solução: [] ()
- URL do site ativo: []()


<h2 id = "built_with"> 👷‍♂️ Construído com </h2>

- <img src="https://img.icons8.com/color/20/000000/typescript.png"/> Typescript
- <img class = "icon" src = "https://img.icons8.com/color/20/000000/html-5--v1.png" /> HTML
- <img src = "https://img.icons8.com/plasticine/20/000000/react.png" /> React JS
- <img src = "https://miro.medium.com/max/480/1*Iohnw2aOQ5EBghVoqKA7VA.png" height="20" width="20" /> Styled Components




<h2 id = "what_i_learned"> 👨‍🎓 O que aprendi </h2>

- Descobri uma boa maneira de adicionar CSS extra a um componente meu. Passo como paremetro uma string com o css extra e crio no componente uma possibilidade opcional de pegar esse css e mandar para o styled components
  
  ``` typescript
    const h2style = `
        align-self: start;
        

        @media (min-width: ${breakpoints._mobile}) {
            margin-top: ${progressive(36, 60, 768)};
            max-width: ${progressiveClamp(223, 350, 768)};
        }
    `
    
    return (
        <H2 styled={ h2style } >Your Day at the Gallery</H2>
    )
     
  ```


<h2 id = "resources"> 📚 Recursos </h2>


- Documentação [react JS] (https://reactjs.org/docs/getting-started.html)


<h2 id = "author"> 😬 Autor </h2>


- Frontend Mentor - [@ MarlonPassos-git] (https://www.front Bedor.io/profile/MarlonPassos-git)