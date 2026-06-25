export type TechIcon = {
  name: string;
  devicon: string; // path key for devicon CDN, e.g. "react/react-original"
};

export type CodeSnippet = {
  filename: string;
  language: string;
  code: string;
  caption?: string;
};

export type ProjectSection = {
  id: string;
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
  codeSnippet?: CodeSnippet;
};

export type ProjectStatus = 'web' | 'signature-expired' | 'in-development';

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  status: ProjectStatus;
  techStack: TechIcon[];
  sections: ProjectSection[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projectsData: ProjectData[] = [
  {
    id: 'sistema-confeitaria',
    title: 'Sistema Confeitaria',
    demoUrl: 'https://confeitaria-umber.vercel.app/',
    description:
      'Site e Sistema de gerenciamento para uma confeitaria, incluindo controle de estoque, vendas e relatórios financeiros.',
    imageSrc: '/projects/confeitaria_logo.png',
    imageAlt: 'Prévia do projeto Sistema Confeitaria',
    tags: ['React', 'JavaScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL'],
    status: 'in-development',
    techStack: [
      { name: 'React', devicon: 'react/react-original' },
      { name: 'JavaScript', devicon: 'javascript/javascript-original' },
      { name: 'Vite', devicon: 'vitejs/vitejs-original' },
      { name: 'Node.js', devicon: 'nodejs/nodejs-original' },
      { name: 'Express', devicon: 'express/express-original' },
      { name: 'PostgreSQL', devicon: 'postgresql/postgresql-original' }
    ],
    sections: [
      {
        id: 'problema',
        title: 'O Problema',
        content:
          'A confeitaria utilizava um sistema legado desenvolvido como uma aplicação Java local, com interface desatualizada e acesso restrito a uma única máquina. A solução dificultava a manutenção, limitava a escalabilidade do negócio e impedia o acompanhamento das operações em tempo real, tornando a gestão de pedidos, estoque e informações financeiras menos eficiente.',
        image: '/projects/confeitaria_redacted.png',
        imageAlt: 'Sistema Confeitaria'
      },
      {
        id: 'ideacao',
        title: 'A Concepção',
        content:
          'A proposta foi desenvolver uma plataforma web completa que centralizasse todas as operações da confeitaria: controle de estoque, registro de vendas, gestão de pedidos e relatórios financeiros. O objetivo era que qualquer funcionário conseguisse operar o sistema com facilidade, sem treinamento extenso.'
      },
      {
        id: 'desenvolvimento',
        title: 'O Desenvolvimento',
        content:
          'A arquitetura adotou um modelo full-stack: frontend em React com Vite, backend em Node.js com Express para a API REST, e PostgreSQL como banco de dados relacional. Abaixo, a rota de atualização de estoque que garante consistência dos dados com validação e timestamp automático.',
        codeSnippet: {
          filename: 'routes/estoque.js',
          language: 'javascript',
          code: `router.put('/produto/:id', authenticate, async (req, res) => {
  const { quantidade, preco } = req.body
  const { id } = req.params

  await db('produtos')
    .where({ id })
    .update({
      quantidade,
      preco,
      atualizado_em: new Date(),
    })

  res.json({ success: true, produtoId: id })
})`,
          caption: 'Rota Express autenticada que atualiza estoque e preço com timestamp automático.'
        }
      },
      {
        id: 'resultado',
        title: 'O Resultado',
        content:
          'O sistema entrou em uso real na confeitaria, substituindo completamente o controle manual por planilhas. O painel administrativo centraliza estoque, pedidos, vendas e relatórios em uma única interface.',
        image: '/projects/conf_final.png',
        imageAlt: 'Interface final do Sistema Confeitaria'
      }
    ]
  },
  {
    id: 'reelstack',
    title: 'Reelstack',
    description:
      'Uma plataforma baseada em gestos de deslizar para fãs de cinema descobrirem o próximo filme para assistir.',
    imageSrc: '/projects/reel_logo.png',
    imageAlt: 'Prévia do projeto Reelstack',
    tags: ['React', 'TypeScript', 'Vite'],
    status: 'in-development',
    techStack: [
      { name: 'React', devicon: 'react/react-original' },
      { name: 'TypeScript', devicon: 'typescript/typescript-original' },
      { name: 'Vite', devicon: 'vitejs/vitejs-original' }
    ],
    sections: [
      {
        id: 'faísca',
        title: 'A Faísca',
        content:
          'Plataformas de streaming cresceram tanto que a paralisia de escolha se tornou um problema real: usuários passam mais tempo rolando catálogos do que assistindo filmes. A decisão de "o que assistir hoje?" virou uma fonte de frustração diária para fãs de cinema.',
        image: '/projects/reel_logo.png',
        imageAlt: 'Reelstack'
      },
      {
        id: 'solucao',
        title: 'A Solução',
        content:
          'Inspirado na mecânica de swipe de apps de relacionamento, o Reelstack apresenta um filme por vez para o usuário deslizar à direita (assistir) ou à esquerda (pular). Sem sobrecarga de opções, sem algoritmo opaco — apenas descoberta intuitiva guiada pelo gosto pessoal.'
      },
      {
        id: 'desenvolvimento',
        title: 'O Desenvolvimento',
        content:
          'Integração com a API do TMDB para dados ricos de filmes e a lógica de gestos construída do zero em React + TypeScript. O hook abaixo gerencia a fila de filmes e expõe uma API simples para os componentes de UI consumirem.',
        codeSnippet: {
          filename: 'hooks/useMovieQueue.ts',
          language: 'typescript',
          code: `const useMovieQueue = (genreId?: number) => {
  const [queue, setQueue] = useState<Movie[]>([])
  const [watchlist, setWatchlist] = useState<Movie[]>([])

  const swipe = useCallback((direction: 'like' | 'skip') => {
    if (direction === 'like') {
      setWatchlist(prev => [...prev, queue[0]])
    }
    setQueue(prev => prev.slice(1))
  }, [queue])

  return { current: queue[0], swipe, watchlist }
}`,
          caption: 'Hook que separa a lógica de fila e watchlist dos componentes de apresentação.'
        }
      }
    ]
  },
  {
    id: 'portfolio',
    title: 'Este Portfólio',
    description: 'Meu site de portfólio atual, por onde você está navegando agora.',
    imageSrc: '/projects/portfolio_logo.png',
    imageAlt: 'Prévia do projeto Portfólio',
    tags: ['Tailwind CSS', 'React', 'TypeScript', 'Vite'],
    status: 'in-development',
    techStack: [
      { name: 'React', devicon: 'react/react-original' },
      { name: 'TypeScript', devicon: 'typescript/typescript-original' },
      { name: 'Tailwind CSS', devicon: 'tailwindcss/tailwindcss-original' },
      { name: 'Vite', devicon: 'vitejs/vitejs-original' }
    ],
    sections: [
      {
        id: 'motivacao',
        title: 'A Motivação',
        content:
          'Templates prontos comunicam competência técnica, mas raramente transmitem identidade. A decisão foi construir tudo do zero: cada componente, cada animação e cada decisão de layout refletem escolhas intencionais sobre como quero me apresentar como desenvolvedor.',
        image: '/projects/portfolio_logo.png',
        imageAlt: 'Este Portfólio'
      },
      {
        id: 'design',
        title: 'O Sistema de Design',
        content:
          'O visual é construído sobre uma grade de 12 colunas com bordas sutis que organizam o conteúdo sem criar ruído visual. A paleta se restringe a neutros com suporte a modo claro e escuro, colocando o trabalho em evidência. A tipografia de rastreamento apertado foi escolhida para dar um caráter editorial à leitura.'
      },
      {
        id: 'construcao',
        title: 'A Construção',
        content:
          'Sem bibliotecas de scroll animation ou utilitários externos — o scroll suave entre seções é implementado do zero para controle total sobre a curva de easing e o comportamento de cancelamento.',
        codeSnippet: {
          filename: 'utils/smoothScroll.ts',
          language: 'typescript',
          code: `export const smoothScrollToId = (id: string) => {
  const target = document.getElementById(id)
  if (!target) return

  const top =
    target.getBoundingClientRect().top + window.scrollY - 96

  window.scrollTo({ top, behavior: 'smooth' })
}`,
          caption: 'Scroll suave customizado com offset para compensar a navbar fixa.'
        }
      }
    ]
  },
  {
    id: 'study-in-gray',
    title: 'Study in Gray',
    githubUrl: 'https://github.com/GuilhermeNL01/MiniChallenge04',
    description:
      'Um jogo investigativo para iPad, inspirado em pistas e dedução, que usa machine learning de forma inovadora.',
    imageSrc: '/projects/study_logo.png',
    imageAlt: 'Prévia do projeto Study in Gray',
    tags: ['CoreML', 'UIKit', 'AVFoundation', 'Xcode'],
    status: 'signature-expired',
    techStack: [
      { name: 'Swift', devicon: 'swift/swift-original' },
      { name: 'Xcode', devicon: 'xcode/xcode-original' },
      { name: 'UIKit', devicon: 'swift/swift-original' },
      { name: 'CoreML', devicon: 'swift/swift-original' },
      { name: 'AVFoundation', devicon: 'swift/swift-original' }
    ],
    sections: [
      {
        id: 'desafio',
        title: 'O Desafio',
        content:
          'Machine learning em dispositivos Apple era amplamente explorado em apps utilitários de reconhecimento, mas raramente como mecânica central de um jogo. O desafio foi criar uma experiência onde a IA não fosse um detalhe técnico, mas sim o coração da jogabilidade.',
        image: '/projects/study_logo.png',
        imageAlt: 'Study in Gray'
      },
      {
        id: 'visao',
        title: 'A Visão',
        content:
          'Inspirado em clássicos da literatura investigativa, como Sherlock Holmes, o jogo coloca o jogador no papel de um detetive encarregado de solucionar um crime. Ao longo da investigação, o jogador coleta e analisa pistas que são processadas por técnicas de Machine Learning, auxiliando na identificação do principal suspeito. Como parte da mecânica central, desenvolvemos um sistema inteligente de avaliação de suspeitos que ajusta dinamicamente o nível de suspeita de cada personagem com base nas evidências encontradas.'
      },
      {
        id: 'engenharia',
        title: 'A Engenharia',
        content:
          'UIKit gerencia as telas e a narrativa. AVFoundation lida com a cutscene inicial do jogo e de todos os efeitos sonoros presentes na experiência. ',
        codeSnippet: {
          filename: 'Scenes.swift',
          language: 'swift',
          code: `func proximoDialogo() {
    if dialogos.count > 0 {
        limparDialogos()
        dialogos.remove(at: 0)
    }

    if let dialogo = dialogos.first {
        exibirMensagem(dialogo: dialogo)

        switch dialogo.mensageiro.type {
        case .main:
            changeTextBox(.nameTagCarrieActive, .textBoxCarrieActive)
        case .info:
            changeTextBox(nil, .infoTextBoxActive)
        default:
            changeTextBox(.nameTag, .textBox)
        }
    }
}`,
          caption:
            'Protocolo de cena gerencia a progressão dos diálogos, alternando a interface de acordo com o tipo de mensageiro.'
        }
      }
    ]
  },
  {
    id: 'hermes-tracking',
    title: 'Hermes Tracking',
    githubUrl: 'https://github.com/GuilhermeNL01/REPO_NAME_HERE',
    description:
      'Centraliza o rastreamento de encomendas, com atualizações em tempo real e notificações automáticas.',
    imageSrc: '/projects/hermes_logo.png',
    imageAlt: 'Prévia do projeto Hermes Tracking',
    tags: ['UIKit', 'MVC', 'Coordinator'],
    status: 'signature-expired',
    techStack: [
      { name: 'Swift', devicon: 'swift/swift-original' },
      { name: 'Xcode', devicon: 'xcode/xcode-original' },
      { name: 'UIKit', devicon: 'swift/swift-original' }
    ],
    sections: [
      {
        id: 'dor',
        title: 'A Dor',
        content:
          'Rastrear encomendas de diferentes transportadoras significa acessar múltiplos sites, memorizar números de rastreio e checar manualmente cada plataforma separadamente. Com o crescimento do e-commerce, essa fragmentação se tornou uma perda real de tempo no cotidiano.',
        image: '/projects/hermes_logo.png',
        imageAlt: 'Hermes Tracking'
      },
      {
        id: 'proposta',
        title: 'A Proposta',
        content:
          'O Hermes centraliza todos os rastreamentos em um único app iOS. O usuário cadastra o código da encomenda uma única vez e recebe atualizações automáticas com notificações push, sem precisar abrir o app. A interface limpa prioriza o status atual e o histórico de movimentações.'
      },
      {
        id: 'arquitetura',
        title: 'A Arquitetura',
        content:
          'O app foi construído com UIKit seguindo MVC + Coordinator para desacoplar a navegação da lógica de negócio. O serviço de rastreamento usa async/await para chamadas de rede limpas e sem callback hell.',
        codeSnippet: {
          filename: 'TrackingService.swift',
          language: 'swift',
          code: `func fetchStatus(for code: String) async throws -> [TrackEvent] {
    var request = URLRequest(url: .trackingAPI(code: code))
    request.setValue(
        "Bearer \\(apiKey)",
        forHTTPHeaderField: "Authorization"
    )

    let (data, response) = try await URLSession.shared.data(for: request)

    guard (response as? HTTPURLResponse)?.statusCode == 200 else {
        throw TrackingError.serverError
    }

    return try JSONDecoder().decode([TrackEvent].self, from: data)
}`,
          caption:
            'Chamada assíncrona com async/await que decodifica eventos de rastreamento da API.'
        }
      }
    ]
  },
  {
    id: 'step-quest',
    title: 'Step Quest',
    githubUrl: 'https://github.com/GuilhermeNL01/MiniChallenge05',
    description:
      'Um app para watchOS que transforma caminhadas diárias em missões de espionagem com desafios.',
    imageSrc: '/projects/step_logo.png',
    imageAlt: 'Prévia do projeto Step Quest',
    tags: ['watchOS', 'SwiftUI', 'HealthKit'],
    status: 'signature-expired',
    techStack: [
      { name: 'Swift', devicon: 'swift/swift-original' },
      { name: 'Xcode', devicon: 'xcode/xcode-original' },
      { name: 'SwiftUI', devicon: 'swift/swift-original' },
      { name: 'HealthKit', devicon: 'swift/swift-original' }
    ],
    sections: [
      {
        id: 'tedio',
        title: 'O Tédio dos Passos',
        content:
          'Contadores de passos mostram um número que poucas pessoas se importam em atingir de forma consistente. A motivação extrínseca de "fechar os anéis" funciona no início, mas perde força rapidamente. Era preciso criar um motivo maior para sair para caminhar todos os dias.',
        image: '/projects/step_logo.png',
        imageAlt: 'Step Quest'
      },
      {
        id: 'missao',
        title: 'A Missão',
        content:
          'A ideia foi transformar cada caminhada em uma missão de espionagem no pulso. Ao sair para caminhar, o agente recebe um briefing de missão, objetivos baseados em passos e tempo, e mensagens narrativas que mudam conforme o progresso.'
      },
      {
        id: 'implementacao',
        title: 'A Implementação',
        content:
          'O motor de missões adapta a dificuldade ao histórico do usuário via HealthKit, garantindo que o desafio seja sempre relevante. SwiftUI no watchOS permite UI declarativa e reativa diretamente no relógio.',
        codeSnippet: {
          filename: 'MissionEngine.swift',
          language: 'swift',
          code: `func generateMission(history: StepHistory) -> Mission {
    let avgSteps = history.recentAverage(days: 7)
    let target = min(avgSteps + 1_000, 12_000)

    return Mission(
        title: MissionTitle.random(),
        stepGoal: target,
        timeLimit: .hours(2),
        briefing: Briefing.generate(for: target)
    )
}`,
          caption:
            'Motor de missões que adapta o objetivo de passos ao histórico recente do usuário.'
        }
      }
    ]
  },
  {
    id: 'planetarium',
    title: 'Planetarium',
    githubUrl: 'https://github.com/GuilhermeNL01/REPO_NAME_HERE',
    description:
      'Um app de realidade aumentada para iPad que permite explorar o sistema solar posicionando planetas em ambientes reais.',
    imageSrc: '/projects/planetarium_logo.png',
    imageAlt: 'Prévia do projeto Planetarium',
    tags: ['ARKit', 'RealityKit'],
    status: 'signature-expired',
    techStack: [
      { name: 'Swift', devicon: 'swift/swift-original' },
      { name: 'Xcode', devicon: 'xcode/xcode-original' },
      { name: 'ARKit', devicon: 'swift/swift-original' },
      { name: 'RealityKit', devicon: 'swift/swift-original' }
    ],
    sections: [
      {
        id: 'abstracao',
        title: 'A Abstração',
        content:
          'Astronomia é uma das ciências mais difíceis de visualizar: escalas imensas, distâncias incompreensíveis e movimentos lentos demais para perceber. Livros e vídeos ajudam, mas ficam limitados a uma tela plana que não transmite a grandiosidade real do sistema solar.',
        image: '/projects/planetarium_logo.png',
        imageAlt: 'Planetarium'
      },
      {
        id: 'realidade-aumentada',
        title: 'A Realidade Aumentada',
        content:
          'O Planetarium usa a câmera do iPad para detectar superfícies reais e posicionar os planetas do sistema solar nesse espaço físico. O usuário pode caminhar ao redor dos planetas, aproximar o rosto de Saturno ou comparar o tamanho da Terra e Júpiter com os próprios olhos.'
      },
      {
        id: 'implementacao',
        title: 'A Implementação',
        content:
          'ARKit detecta planos horizontais com alta precisão. RealityKit renderiza os modelos 3D com texturas realistas e iluminação baseada em física. O trecho abaixo posiciona um planeta sobre um plano detectado pelo ARKit.',
        codeSnippet: {
          filename: 'SolarSystemAR.swift',
          language: 'swift',
          code: `func placePlanet(_ planet: Planet, on anchor: ARPlaneAnchor) {
    let mesh = MeshResource.generateSphere(radius: planet.scaledRadius)
    var material = SimpleMaterial()
    material.baseColor = .texture(.load(named: planet.textureName)!)

    let entity = ModelEntity(mesh: mesh, materials: [material])
    entity.generateCollisionShapes(recursive: false)

    let anchorEntity = AnchorEntity(anchor: anchor)
    anchorEntity.addChild(entity)
    arView.scene.addAnchor(anchorEntity)
}`,
          caption: 'Planeta renderizado com RealityKit e ancorado ao plano detectado pelo ARKit.'
        }
      }
    ]
  },
  {
    id: 'shyne',
    title: 'Shyne',
    githubUrl: 'https://github.com/GuilhermeNL01/REPO_NAME_HERE',
    description:
      'Um app criado para desenvolver habilidades sociais com exercícios interativos e acompanhamento diário.',
    imageSrc: '/projects/shyne_logo.png',
    imageAlt: 'Prévia do projeto Shyne',
    tags: ['UIKit', 'MVVM-C', 'CoreData'],
    status: 'signature-expired',
    techStack: [
      { name: 'Swift', devicon: 'swift/swift-original' },
      { name: 'Xcode', devicon: 'xcode/xcode-original' },
      { name: 'UIKit', devicon: 'swift/swift-original' },
      { name: 'CoreData', devicon: 'swift/swift-original' }
    ],
    sections: [
      {
        id: 'necessidade',
        title: 'A Necessidade',
        content:
          'Habilidades sociais se desenvolvem com prática, mas pessoas com ansiedade social raramente têm acesso a ambientes seguros para treinar sem julgamento. Terapia é eficaz, mas inacessível para muitos. Faltava uma ferramenta do dia a dia que tornasse esse desenvolvimento possível em pequenos passos.',
        image: '/projects/shyne_logo.png',
        imageAlt: 'Shyne'
      },
      {
        id: 'caminho',
        title: 'O Caminho',
        content:
          'O Shyne propõe exercícios interativos curtos e diários, cada um focado em uma habilidade social específica. O progresso é acompanhado ao longo do tempo, mostrando crescimento concreto e criando o hábito de praticar através de uma série de streaks e recompensas.'
      },
      {
        id: 'tecnologia',
        title: 'A Tecnologia',
        content:
          'Arquitetura MVVM-C separa navegação, lógica de negócio e apresentação. CoreData persiste o histórico localmente, garantindo privacidade total. O ViewModel abaixo coordena o salvamento de um exercício concluído.',
        codeSnippet: {
          filename: 'ExerciseViewModel.swift',
          language: 'swift',
          code: `func complete(_ exercise: Exercise) {
    exercise.completedAt = Date()
    exercise.streak = streak(for: exercise) + 1

    do {
        try context.save()
        delegate?.didCompleteExercise(streak: exercise.streak)
    } catch {
        errorMessage = "Não foi possível salvar o progresso."
    }
}`,
          caption: 'ViewModel persiste o exercício e notifica o delegate para atualizar a UI.'
        }
      }
    ]
  },
  {
    id: 'collapse',
    title: 'Collapse',
    githubUrl: 'https://github.com/GuilhermeNL01/REPO_NAME_HERE',
    description:
      'Um jogo de plataforma 2D em que jogadores exploram um mundo em colapso e dominam mecânicas de movimento para sobreviver.',
    imageSrc: '/projects/collapse_logo.png',
    imageAlt: 'Prévia do projeto Collapse',
    tags: ['SpriteKit', 'GameplayKit'],
    status: 'signature-expired',
    techStack: [
      { name: 'Swift', devicon: 'swift/swift-original' },
      { name: 'Xcode', devicon: 'xcode/xcode-original' },
      { name: 'SpriteKit', devicon: 'swift/swift-original' },
      { name: 'GameplayKit', devicon: 'swift/swift-original' }
    ],
    sections: [
      {
        id: 'conceito',
        title: 'O Conceito',
        content:
          'O desafio de design foi criar um jogo de plataforma onde o ambiente em si é o antagonista. Em vez de inimigos convencionais, o mundo literalmente desmorona ao redor do jogador, exigindo que o domínio do movimento seja simultaneamente o objetivo e o prazer do jogo.',
        image: '/projects/collapse_logo.png',
        imageAlt: 'Collapse'
      },
      {
        id: 'mundo',
        title: 'O Mundo',
        content:
          'O design de níveis comunica visualmente o colapso progressivo: plataformas que cedem, estruturas que racham e ambientes que se transformam em tempo real. Cada área tem sua própria linguagem visual de deterioração, criando uma narrativa ambiental sem diálogos.'
      },
      {
        id: 'mecanica',
        title: 'A Mecânica',
        content:
          'SpriteKit gerencia física e renderização 2D. O loop principal do jogador processa input a cada frame para garantir responsividade imediata, enquanto a máquina de estados controla grounded, airborne e dashing.',
        codeSnippet: {
          filename: 'PlayerNode.swift',
          language: 'swift',
          code: `override func update(_ currentTime: TimeInterval) {
    guard isGrounded else { return }

    let speed: CGFloat = isSprinting ? 320 : 180
    physicsBody?.velocity.dx = moveDirection * speed

    if shouldJump {
        physicsBody?.applyImpulse(CGVector(dx: 0, dy: 900))
        isGrounded = false
        shouldJump = false
        run(SKAction.playSoundFileNamed("jump.wav", waitForCompletion: false))
    }
}`,
          caption:
            'Loop de update aplica velocidade e impulso de salto com resposta imediata ao input.'
        }
      }
    ]
  },
  {
    id: 'my-card-collection',
    title: 'My Card Collection',
    githubUrl: 'https://github.com/GuilhermeNL01/Card-Collection',
    description:
      'Um gerenciador de coleção de cartas de Magic: The Gathering com busca e recursos de organização.',
    imageSrc: '/projects/mycard_logo.png',
    imageAlt: 'Prévia do projeto My Card Collection',
    tags: ['SwiftUI', 'SwiftData', 'REST API'],
    status: 'signature-expired',
    techStack: [
      { name: 'Swift', devicon: 'swift/swift-original' },
      { name: 'Xcode', devicon: 'xcode/xcode-original' },
      { name: 'SwiftUI', devicon: 'swift/swift-original' },
      { name: 'SwiftData', devicon: 'swift/swift-original' }
    ],
    sections: [
      {
        id: 'colecao',
        title: 'O Colecionador',
        content:
          'Jogadores de Magic: The Gathering acumulam centenas de cartas físicas ao longo dos anos. Saber quais cartas você possui, em quais edições e em qual quantidade é uma tarefa que a maioria gerencia com planilhas ou na memória, o que leva a compras duplicadas e coleção desorganizada.',
        image: '/projects/mycard_logo.png',
        imageAlt: 'My Card Collection'
      },
      {
        id: 'digital',
        title: 'A Coleção Digital',
        content:
          'O app transforma a coleção física em um catálogo digital pesquisável. O usuário busca cartas pelo nome, visualiza todas as edições disponíveis com arte e preço atualizado via Scryfall API, e adiciona à sua coleção com quantidade exata.'
      },
      {
        id: 'implementacao',
        title: 'A Implementação',
        content:
          'SwiftUI e SwiftData eliminam boilerplate para persistência e UI declarativa. A busca combina o nome da carta com filtros de cor via query params na Scryfall REST API.',
        codeSnippet: {
          filename: 'CardSearchService.swift',
          language: 'swift',
          code: `func search(name: String, colors: Set<MTGColor> = []) async throws -> [ScryfallCard] {
    var query = "name:\\(name)"
    if !colors.isEmpty {
        query += " color:\\(colors.map(\\.symbol).joined())"
    }

    var components = URLComponents(string: "https://api.scryfall.com/cards/search")!
    components.queryItems = [URLQueryItem(name: "q", value: query)]

    let (data, _) = try await URLSession.shared.data(from: components.url!)
    return try JSONDecoder().decode(ScryfallResponse.self, from: data).data
}`,
          caption:
            'Busca na Scryfall API com suporte a filtros de cor usando query params compostos.'
        }
      }
    ]
  }
];
