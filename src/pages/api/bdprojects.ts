import ProjectModel from "../../model/project";

const projects: ProjectModel[] = [

    new ProjectModel(
        0, 
        "Abrace", 
        "Plataforma dedicada à promoção de projetos solidários e ao apoio à comunidade", 
        "abrace/abrace.png", 
        ["Python", "Django", "JavaScript", "HTML", "CSS"], 
        "O Abrace é um projeto de uma plataforma dedicada à promoção da solidariedade e ao apoio à comunidade. Nela, você pode facilmente criar e participar de projetos solidários, se conectando com outras pessoas que se interessam pelas mesmas causas.", 
        ["Criação, edição e exclusão de conta", "Criação, edição e exclusão de projeto", "Moderação de projeto", "Avaliações de usuários", "Postagens e comentários em projetos", "Recomendações de projetos"], 
        ["abrace/register.png", "abrace/login.png", "abrace/projects.png", "abrace/project.png", "abrace/posts.png", "abrace/comments.png", "abrace/newproject.png", "abrace/editproject.png", "abrace/members.png", "abrace/solicitation.png", "abrace/profile.png", "abrace/myprojects.png"], 
        "https://github.com/KayaraSilveira/Abrace"),

    new ProjectModel(
        1, 
        "Shop Me", 
        "Simulação de um e-commerce demonstrando o funcionamento de um algoritmo de recomendação", 
        "shopme/shopme.png", 
        ["NodeJs", "JavaScript", "NoSQL", "OrientDB", "Nunjucks", "HTML", "CSS"], 
        "Shop me é um projeto de simulação de um e-commerce, demonstrando o funcionamento de um algoritmo de recomendação utilizando um banco de dados orientado a grafo. O algoritmo é capaz de visualizar o histórico de todos os clientes e gerar recomendações personalizadas baseadas no comportamento de consumo de clientes semelhantes através da similaridade de cossenos.", 
        ["Criação de conta", "Login", "Visualização de produtos", "Compra de produtos", "Recomendações personalizadas"], 
        ["shopme/register.png", "shopme/login.png", "shopme/home.png"], 
        "https://github.com/SLGabi/BDA"),


    new ProjectModel(
        2, 
        "Voice Transcriber", 
        "Aplicativo web desenvolvido como uma proposta de prática pedagógica para alunos surdos e com deficiência auditiva", 
        "voicetranscriber/voicetranscriber.png", 
        ["Python", "Django", "JavaScript", "Ajax", "HTML", "CSS"], 
        "Este projeto é um protótipo de um aplicativo web, desenvolvido como proposta de prática pedagógica para alunos surdos e deficientes auditivos. A ideia é que os alunos possam usar o aplicativo como um auxílio durante as aulas em classes regulares. O aplicativo realiza uma transcrição em tempo real do que é falado e exibe o texto, permitindo assim que o aluno acompanhe a fala do professor.", 
        ["Transcrição do audio em tempo real", "Cancelamento de ruídos"], 
        ["voicetranscriber/img1.png", "voicetranscriber/img2.png", "voicetranscriber/img3.png", "voicetranscriber/img4.png"], 
        "https://github.com/KayaraSilveira/real-time-voice-transcriber"),


    new ProjectModel(
        4, 
        "To do list", 
        "Uma lista de tarefas Full Stack criada para consolidar meus estudos de Django e Python", 
        "todolist/todolist.png", 
        ["Python", "Django", "JavaScript", "Ajax", "HTML", "CSS"], 
        "Este é um projeto de lista de tarefas (To-Do List) que permite aos usuários gerenciar suas tarefas diárias de forma eficiente. Nela, os usuários podem adicionar, editar, marcar como concluídas e excluir tarefas com facilidade, além de criar listas compartilhadas com outros usuários.", 
        ["Criação, edição e exclusão de conta", "Criação, edição e exlcusão de listas de tarefas", "Criação, edição, exlcusão e ordenação de tarefas", "Criação de listas de tarefas compartilhadas", "Calendário", "Previsão do tempo"], 
        ["todolist/home.png", "todolist/compartilhada.png", "todolist/leave.png", "todolist/profile.png", "todolist/login.png"], 
        "https://github.com/KayaraSilveira/to-do-list"),

    new ProjectModel(
        5, 
        "Portfólio", 
        "Este é o meu próprio portfólio, desenvolvido usando Next.js, React e TypeScript", 
        "portfolio/portfolio.png", 
        ["NextJs", "React", "TypeScript", "JavaScript", "HTML", "CSS"], 
        "Este é o meu próprio portfólio, desenvolvido com o objetivo de apresentar meus principais projetos pessoais e habilidades de desenvolvimento web. Utilizando Next.js, React e TypeScript, este portfólio é uma plataforma que destaca minha experiência em desenvolvimento de software.", 
        ["Visualizar projetos", "Filtrar projetos por tag", "Enviar Email para contato"], 
        ["portfolio/home1.png","portfolio/home2.png"], 
        "https://github.com/KayaraSilveira/portfolio"),
]

export default projects