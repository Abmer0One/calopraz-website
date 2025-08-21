import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Building2, 
  Users, 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  ChevronRight,
  Star,
  Award,
  Target,
  Heart,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Calendar,
  DollarSign,
  BarChart3,
  PieChart,
  Briefcase,
  GraduationCap,
  Globe,
  Handshake,
  Server,
  Smartphone,
  Cloud,
  Fingerprint
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'equipa', 'servicos', 'diferenciais', 'portfolio', 'blog', 'faq', 'contactos']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const [expandedFaqCategory, setExpandedFaqCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleFaqCategory = (category) => {
    setExpandedFaqCategory(expandedFaqCategory === category ? null : category);
    setOpenQuestion(null);
  };

  const toggleQuestion = (q) => {
    setOpenQuestion(openQuestion === q ? null : q);
  };



  const serviceCategories = {
    Consultoria: [
      {
        icon: Calculator,
        title: "Consultoria Contábil",
        description: "Gestão completa da contabilidade empresarial com foco na conformidade e otimização fiscal."
      },
      {
        icon: FileText,
        title: "Consultoria Fiscal e Tributária",
        description: "Assessoria especializada em questões fiscais e tributárias para maximizar a eficiência fiscal."
      },
      {
        icon: Users,
        title: "Consultoria em Recursos Humanos",
        description: "Gestão estratégica de pessoas, desde recrutamento até desenvolvimento organizacional."
      },
      {
        icon: Building2,
        title: "Serviços Administrativos e Empresariais",
        description: "Suporte administrativo completo para otimizar processos e aumentar a produtividade."
      },
      {
        icon: TrendingUp,
        title: "Elaboração de Plano de Negócio",
        description: "Desenvolvimento de planos estratégicos e estudos de viabilidade para novos empreendimentos."
      }
    ],
    "Gestão Financeira": [
      {
        icon: BarChart3,
        title: "Gestão de Tesouraria",
        description: "Controle de fluxo de caixa, mapas de recebimentos/pagamentos e planejamento de liquidez."
      },
      {
        icon: PieChart,
        title: "Gestão de Orçamentos",
        description: "Planejamento orçamentário para empresas e famílias com foco na sustentabilidade financeira."
      },
      {
        icon: DollarSign,
        title: "Captação de Recursos",
        description: "Apoio na elaboração de dossiês financeiros, simulações de crédito e negociação bancária."
      },
      {
        icon: Target,
        title: "Gestão de Custos e Preços",
        description: "Cálculo de custo real, definição de margem de lucro e análise do ponto de equilíbrio."
      }
    ],
    Tecnologia: [
      {
        icon: Server,
        title: "Desenvolvimento de Sistemas de Gestão Personalizados",
        description: "Soluções sob medida para faturação, folha de pagamento, relatórios financeiros, controlo de stock, gestão fiscal e mais."
      },
      {
        icon: Globe,
        title: "Criação e Manutenção de Websites Corporativos",
        description: "Desenvolvimento de websites institucionais modernos, adaptados a dispositivos móveis, com áreas de acesso, blog, formulários e integrações."
      },
      {
        icon: Smartphone,
        title: "Desenvolvimento de Aplicações Mobile e Web",
        description: "Criação de aplicações móveis (Android e iOS) e web responsivas, integradas a sistemas corporativos e orientadas à experiência do usuário."
      },
      {
        icon: Cloud,
        title: "Hospedagem de Website",
        description: "Alojamento seguro com suporte técnico, backups regulares e certificado SSL para manter o website sempre online e protegido."
      },
      {
        icon: Fingerprint,
        title: "Instalação e Integração com Terminais Biométricos",
        description: "Instalação de terminais biométricos para ponto eletrônico ou controlo de acesso, integrados a sistemas de RH e folha de pagamento."
      }
    ]
  };



  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Próximo e Humano",
      description: "Relacionamento personalizado com cada cliente, entendendo suas necessidades específicas."
    },
    {
      icon: Lightbulb,
      title: "Experiência Jovem e Inovadora",
      description: "Abordagem moderna e criativa para resolver desafios empresariais complexos."
    },
    {
      icon: CheckCircle,
      title: "Soluções Integradas",
      description: "Todos os serviços em um só lugar, proporcionando maior eficiência e comodidade."
    },
    {
      icon: Award,
      title: "Compromisso com Resultados",
      description: "Foco em resultados sustentáveis e crescimento consistente dos nossos clientes."
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Comunicação clara e transparente em todos os processos e decisões."
    }
  ]

  const sectors = [
    "Comércio", "Indústria", "Serviços", "Construção Civil", 
    "Agronegócio", "Setor Público", "Saúde", "Educação", "Tecnologia"
  ]

  const faqCategories = {
    "Consultoria Contábil": [
      {
        question: "Por que preciso de serviços contábeis mesmo tendo uma empresa pequena?",
        answer: "A contabilidade é obrigatória por lei e garante que a sua empresa esteja em conformidade. Além disso, ajuda a organizar as finanças e tomar decisões estratégicas com base em dados."
      },
      {
        question: "Vocês emitem relatórios mensais de desempenho financeiro?",
        answer: "Sim. Elaboramos demonstrações financeiras e relatórios gerenciais personalizados, para que o empresário acompanhe o desempenho do seu negócio em tempo real."
      },
      {
        question: "A Calopraz pode ajudar na regularização da minha empresa?",
        answer: "Sim. Atuamos na regularização contábil e fiscal, reorganizando as obrigações e colocando a empresa em conformidade com a lei."
      }
    ],
    "Consultoria Fiscal e Tributária": [
      {
        question: "Qual é a importância do planejamento fiscal?",
        answer: "O planejamento fiscal ajuda a reduzir custos tributários de forma legal, evitando multas e aproveitando benefícios previstos na legislação."
      },
      {
        question: "Vocês auxiliam no cumprimento de obrigações fiscais mensais e anuais?",
        answer: "Sim. Garantimos que todas as declarações e tributos sejam entregues dentro dos prazos, evitando riscos de autuações."
      },
      {
        question: "Como vocês lidam com notificações de órgãos fiscais?",
        answer: "Representamos o cliente junto às autoridades fiscais, auxiliando na resolução de pendências e na obtenção de certidões negativas."
      }
    ],
    "Consultoria em Recursos Humanos": [
      {
        question: "Vocês fazem processamento completo da folha de pagamento?",
        answer: "Sim. Gerimos toda a folha salarial, incluindo vencimentos, descontos, benefícios e encargos sociais."
      },
      {
        question: "Como a Calopraz pode ajudar na gestão de pessoal?",
        answer: "Auxiliamos desde a admissão até a rescisão contratual, além de desenvolver regulamentos internos e garantir cumprimento da legislação laboral."
      },
      {
        question: "Vocês oferecem suporte em questões trabalhistas?",
        answer: "Sim. Prestamos assessoria preventiva em conformidade com a legislação laboral, minimizando riscos de litígios."
      }
    ],
    "Serviços Administrativos e Empresariais": [
      {
        question: "Vocês ajudam na abertura de empresas?",
        answer: "Sim. Prestamos todo o apoio na constituição de empresas, desde a escolha do regime jurídico e fiscal até o registo formal. Documentos necessários: 1. Cópia do BI, 2. Dados da empresa. Após a constituição: Certidão comercial, Ficha da matrícula, Diário da República (online), Estatuto, NIF e Certificado de admissibilidade."
      },
      {
        question: "Posso contar com a Calopraz para elaborar um plano de negócios?",
        answer: "Sim. Desenvolvemos planos de negócios e estudos de viabilidade que auxiliam na captação de investimentos e na tomada de decisões estratégicas."
      },
      {
        question: "A empresa também faz gestão documental?",
        answer: "Sim. Organizamos e digitalizamos documentos, garantindo segurança e facilidade de acesso à informação."
      }
    ],

    // -----------------------------
    //           TECNOLOGIA
    // -----------------------------
    "Tecnologia · Desenvolvimento de Sistemas de Gestão Personalizados": [
      {
        question: "É possível adaptar o sistema à forma como a minha empresa já trabalha?",
        answer: "Sim, desenvolvemos soluções sob medida, respeitando os fluxos de trabalho e processos específicos de cada cliente."
      },
      {
        question: "Posso integrar o sistema com softwares que já utilizo?",
        answer: "Sim, realizamos integrações com softwares de faturação, contabilidade, ERP e outros sistemas."
      },
      {
        question: "O sistema pode crescer conforme a minha empresa aumenta de tamanho?",
        answer: "Sim, nossas soluções são escaláveis e permitem adicionar novos módulos ou funcionalidades conforme necessário."
      }
    ],
    "Tecnologia · Criação e Manutenção de Websites Corporativos": [
      {
        question: "O website será compatível com telemóveis e tablets?",
        answer: "Sim, todos os websites são desenvolvidos de forma responsiva para se adaptar a qualquer dispositivo."
      },
      {
        question: "Posso atualizar o conteúdo do meu website sozinho?",
        answer: "Sim, entregamos o website com um painel de gestão (CMS) para que possa atualizar textos, imagens e outras informações."
      },
      {
        question: "O website pode ter áreas privadas para clientes ou colaboradores?",
        answer: "Sim, podemos implementar áreas de acesso restrito, formulários personalizados e integrações de login."
      }
    ],
    "Tecnologia · Desenvolvimento de Aplicações Mobile e Web": [
      {
        question: "Desenvolvem aplicações tanto para Android como para iOS?",
        answer: "Sim, criamos aplicações nativas e híbridas que funcionam em ambos os sistemas operacionais."
      },
      {
        question: "A aplicação pode ser integrada ao meu sistema atual?",
        answer: "Sim, garantimos a integração com sistemas já existentes, como ERPs, CRMs e plataformas online."
      },
      {
        question: "Vocês cuidam também da publicação nas lojas (Google Play e App Store)?",
        answer: "Sim, acompanhamos o processo completo até a disponibilização da aplicação nas lojas oficiais."
      }
    ],
    "Tecnologia · Hospedagem de Website": [
      {
        question: "O serviço de hospedagem inclui certificado de segurança (SSL)?",
        answer: "Sim, todos os pacotes incluem SSL para garantir navegação segura."
      },
      {
        question: "Há backups regulares do meu website?",
        answer: "Sim, realizamos cópias de segurança automáticas para evitar perda de dados."
      },
      {
        question: "Se meu website ficar offline, vocês dão suporte imediato?",
        answer: "Sim, nossa equipa de suporte técnico está disponível para resolver problemas rapidamente."
      }
    ],
    "Tecnologia · Instalação e Integração com Terminais Biométricos": [
      {
        question: "Os terminais biométricos funcionam apenas para controlo de ponto?",
        answer: "Não, podem ser usados tanto para controlo de ponto como para controlo de acessos em áreas restritas."
      },
      {
        question: "É possível integrar os terminais biométricos com o sistema de folha de pagamento?",
        answer: "Sim, realizamos a integração direta com sistemas de RH e processamento de salários."
      },
      {
        question: "Vocês oferecem manutenção e suporte após a instalação?",
        answer: "Sim, disponibilizamos planos de manutenção preventiva e suporte técnico contínuo."
      }
    ]
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold calopraz-gold">CALOPRAZ</div>
              <div className="ml-2 text-sm text-gray-600 hidden sm:block">CONSULTORIA</div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Início' },
                { id: 'sobre', label: 'Sobre Nós' },
                { id: 'equipa', label: 'Equipa' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'diferenciais', label: 'Diferenciais' },
                { id: 'portfolio', label: 'Portfólio' },
                { id: 'blog', label: 'Blog' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contactos', label: 'Contactos' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-[#D4A017] ${
                    activeSection === item.id ? 'text-[#D4A017]' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#D4A017]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Início' },
                { id: 'sobre', label: 'Sobre Nós' },
                { id: 'equipa', label: 'Equipa' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'diferenciais', label: 'Diferenciais' },
                { id: 'portfolio', label: 'Portfólio' },
                { id: 'blog', label: 'Blog' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contactos', label: 'Contactos' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#D4A017] hover:bg-gray-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 calopraz-hero calopraz-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="calopraz-animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 calopraz-text-shadow">
                <span className="calopraz-gold">CALOPRAZ</span> CONSULTORIA
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Soluções inteligentes para o crescimento do seu negócio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection('contactos')}
                  className="calopraz-btn-primary px-8 py-3 text-lg"
                >
                  Peça um orçamento
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contactos')}
                  className="px-8 py-3 text-lg border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white"
                >
                  Agende uma consulta
                  <Calendar className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="calopraz-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              Fundada por especialistas com vasta experiência, a CALOPRAZ é uma consultoria que combina conhecimento técnico com inovação para oferecer soluções empresariais eficazes. Além das áreas de consultoria estratégica e gestão, atuamos também em serviços de Tecnologia da Informação (TI), oferecendo soluções modernas em transformação digital, automação de processos, sistemas de gestão e suporte tecnológico, ajudando empresas a se tornarem mais eficientes e competitivas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="calopraz-card text-center">
              <CardHeader>
                <Target className="w-12 h-12 calopraz-gold mx-auto mb-4" />
                <CardTitle className="text-xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fornecer soluções consultivas de excelência que impulsionem o crescimento sustentável e a competitividade dos nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="calopraz-card text-center">
              <CardHeader>
                <Lightbulb className="w-12 h-12 calopraz-gold mx-auto mb-4" />
                <CardTitle className="text-xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser a consultoria de referência em Angola, reconhecida pela inovação, qualidade e proximidade com os clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="calopraz-card text-center">
              <CardHeader>
                <Heart className="w-12 h-12 calopraz-gold mx-auto mb-4" />
                <CardTitle className="text-xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ética, excelência, confiança, inovação e compromisso são os pilares que orientam todas as nossas ações e decisões.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipa" className="calopraz-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa Equipa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais experientes e dedicados, prontos para oferecer as melhores soluções para o seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="calopraz-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-[#D4A017] to-[#B8860B] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl">Lourenço Mota</CardTitle>
                <CardDescription className="text-[#D4A017] font-semibold">
                  Especialista em Contabilidade e Finanças
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Profissional com vasta experiência em gestão financeira e contabilidade empresarial, especializado em otimização fiscal e planejamento estratégico.
                </p>
              </CardContent>
            </Card>

            <Card className="calopraz-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-[#D4A017] to-[#B8860B] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl">Fonseca Cariongo</CardTitle>
                <CardDescription className="text-[#D4A017] font-semibold">
                  Especialista em Gestão Fiscal e Recursos Humanos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert em questões fiscais e tributárias, com forte actuação em gestão de recursos humanos e desenvolvimento organizacional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="calopraz-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de consultoria para atender todas as necessidades do seu negócio.
            </p>
          </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(serviceCategories).map(([category, services]) => (
            <Card key={category} className="calopraz-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(expandedCategory === category ? services : services.slice(0, 2)).map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <service.icon className="w-6 h-6 calopraz-gold mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline"
                  className="mt-4 border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white"
                  onClick={() => toggleCategory(category)}
                >
                  {expandedCategory === category ? "Ver menos" : "Ver mais"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>


          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Sectores de Actuação</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {sectors.map((sector, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-[#D4A017] text-[#D4A017]">
                  {sector}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="calopraz-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que nos torna únicos e a escolha ideal para o crescimento do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <Card key={index} className="calopraz-card text-center">
                <CardHeader>
                  <differential.icon className="w-12 h-12 calopraz-gold mx-auto mb-4" />
                  <CardTitle className="text-lg">{differential.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{differential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Público-Alvo</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Atendemos empresas privadas, públicas, empreendedores, startups, ONGs, fundações e profissionais liberais, 
              oferecendo soluções personalizadas para cada perfil de cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="calopraz-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfólio & Casos de Sucesso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos nossos projectos e os resultados alcançados para nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="calopraz-card">
              <CardHeader>
                <Star className="w-8 h-8 calopraz-gold mb-2" />
                <CardTitle className="text-lg">Empresa de Tecnologia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Implementação de sistema de gestão financeira que resultou em 30% de redução de custos operacionais.
                </p>
                <Badge className="calopraz-bg-gold text-white">Tecnologia</Badge>
              </CardContent>
            </Card>

            <Card className="calopraz-card">
              <CardHeader>
                <Star className="w-8 h-8 calopraz-gold mb-2" />
                <CardTitle className="text-lg">Rede de Comércio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Reestruturação fiscal que proporcionou economia de 25% em impostos e melhoria na gestão de fluxo de caixa.
                </p>
                <Badge className="calopraz-bg-gold text-white">Comércio</Badge>
              </CardContent>
            </Card>

            <Card className="calopraz-card">
              <CardHeader>
                <Star className="w-8 h-8 calopraz-gold mb-2" />
                <CardTitle className="text-lg">Startup de Serviços</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Elaboração de plano de negócios que viabilizou captação de investimento de 500.000.000kz.
                </p>
                <Badge className="calopraz-bg-gold text-white">Serviços</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Depoimentos</h3>
            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
  <Card className="calopraz-card w-80">
    <CardContent className="pt-6">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#D4A017] text-[#D4A017]" />
          ))}
        </div>
        <p className="text-lg text-gray-600 italic mb-4">
          "A CALOPRAZ transformou a gestão financeira da nossa empresa. O atendimento é excepcional e os resultados superaram nossas expectativas."
        </p>
        <p className="font-semibold text-gray-900">João Silva</p>
        <p className="text-sm text-gray-500">CEO, TechSolutions Angola</p>
      </div>
    </CardContent>
  </Card>

  <Card className="calopraz-card w-80">
    <CardContent className="pt-6">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#D4A017] text-[#D4A017]" />
          ))}
        </div>
        <p className="text-lg text-gray-600 italic mb-4">
          "A CALOPRAZ trouxe clareza e resultados rápidos. Recomendo sem hesitar!"
        </p>
        <p className="font-semibold text-gray-900">Maria Fernandes</p>
        <p className="text-sm text-gray-500">Fundadora, Startup Luanda</p>
      </div>
    </CardContent>
  </Card>
</div>

          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="calopraz-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog & Notícias</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantenha-se atualizado com as últimas novidades em contabilidade, fiscalidade e gestão empresarial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="calopraz-card">
              <CardHeader>
                <CardTitle className="text-lg">Novas Regulamentações Fiscais 2024</CardTitle>
                <CardDescription className="text-sm text-gray-500">15 de Janeiro, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Conheça as principais mudanças na legislação fiscal angolana e como elas podem impactar o seu negócio.
                </p>
                <Button variant="outline" size="sm" className="border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white">
                  Ler mais
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="calopraz-card">
              <CardHeader>
                <CardTitle className="text-lg">Gestão de Fluxo de Caixa para PMEs</CardTitle>
                <CardDescription className="text-sm text-gray-500">10 de Janeiro, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dicas práticas para otimizar o controle financeiro e garantir a saúde financeira da sua empresa.
                </p>
                <Button variant="outline" size="sm" className="border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white">
                  Ler mais
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="calopraz-card">
              <CardHeader>
                <CardTitle className="text-lg">Tendências em Recursos Humanos</CardTitle>
                <CardDescription className="text-sm text-gray-500">5 de Janeiro, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  As principais tendências em gestão de pessoas que estão moldando o futuro das organizações.
                </p>
                <Button variant="outline" size="sm" className="border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white">
                  Ler mais
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="calopraz-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e soluções empresariais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(faqCategories).map(([category, questions]) => (
              <Card key={category} className="calopraz-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(expandedFaqCategory === category ? questions : questions.slice(0, 2)).map((item, index) => (
                      <div key={index} className="border-b pb-2">
                        <button
                          className="flex justify-between w-full text-left font-semibold text-gray-900"
                          onClick={() => toggleQuestion(item.question)}
                        >
                          ❓ {item.question}
                        </button>
                        {openQuestion === item.question && (
                          <p className="mt-2 text-gray-600 text-sm">✔ {item.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline"
                    className="mt-4 border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white"
                    onClick={() => toggleFaqCategory(category)}
                  >
                    {expandedFaqCategory === category ? "Ver menos" : "Ver mais"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contactos" className="calopraz-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contacto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para ajudar o seu negócio a crescer. Entre em contacto connosco hoje mesmo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 calopraz-gold mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefone/WhatsApp</p>
                    <p className="text-gray-600">+244 928 771 428</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 calopraz-gold mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <p className="text-gray-600">info@calopraz.ao</p>
                  </div>
                </div>

                <div 
                  className="flex items-center cursor-pointer hover:opacity-80 transition"
                  onClick={() => window.open("https://maps.app.goo.gl/A2wbgwtZVnJJxxuT8", "_blank")}
                >
                  <MapPin className="w-6 h-6 calopraz-gold mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Localização</p>
                    <p className="text-gray-600">Luanda, Angola</p>
                  </div>
                </div>


                <div className="flex items-center">
                  <Globe className="w-6 h-6 calopraz-gold mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Horário de Atendimento</p>
                    <p className="text-gray-600">Segunda a Sexta: 8h00 - 17h00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Siga-nos</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/sua_pagina" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white"
                    >
                      Facebook
                    </Button>
                  </a>

                  <a 
                    href="https://www.instagram.com/mundoconverse1917?igsh=ZTIwdWc3OGI0dndx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white"
                    >
                      Instagram
                    </Button>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/sua_pagina" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white"
                    >
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>

            </div>

            <div>
              <Card className="calopraz-card">
                <CardHeader>
                  <CardTitle className="text-xl">Envie-nos uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contacto consigo brevemente.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                        placeholder="+244 000 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Serviço de Interesse</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent">
                        <option>Selecione um serviço</option>

                        <optgroup label="Consultoria">
                          <option>Consultoria Contábil</option>
                          <option>Consultoria Fiscal e Tributária</option>
                          <option>Consultoria em Recursos Humanos</option>
                          <option>Serviços Administrativos</option>
                          <option>Serviços Financeiros</option>
                        </optgroup>

                        <optgroup label="Tecnologia da Informação">
                          <option>Tecnologia · Desenvolvimento de Sistemas de Gestão Personalizados</option>
                          <option>Tecnologia · Criação e Manutenção de Websites Corporativos</option>
                          <option>Tecnologia · Desenvolvimento de Aplicações Mobile e Web</option>
                          <option>Tecnologia · Hospedagem de Website</option>
                          <option>Tecnologia · Instalação e Integração com Terminais Biométricos</option>
                        </optgroup>

                        <option>Outro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                      <textarea 
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                        placeholder="Descreva como podemos ajudar..."
                      ></textarea>
                    </div>
                    <Button className="w-full calopraz-btn-primary">
                      Enviar Mensagem
                      <MessageCircle className="ml-2" size={16} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold calopraz-gold mb-4">CALOPRAZ</div>
              <p className="text-gray-400 mb-4">
                Soluções inteligentes para o crescimento do seu negócio.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/sua-pagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#D4A017]">
                    Facebook
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/company/sua-pagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#D4A017]">
                    LinkedIn
                  </Button>
                </a>
              </div>

            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#D4A017] transition-colors">Consultoria Contábil</a></li>
                <li><a href="#" className="hover:text-[#D4A017] transition-colors">Consultoria Fiscal</a></li>
                <li><a href="#" className="hover:text-[#D4A017] transition-colors">Recursos Humanos</a></li>
                <li><a href="#" className="hover:text-[#D4A017] transition-colors">Serviços Financeiros</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-[#D4A017] transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('equipa')} className="hover:text-[#D4A017] transition-colors">Nossa Equipa</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-[#D4A017] transition-colors">Portfólio</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="hover:text-[#D4A017] transition-colors">Blog</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+244 928 771 428</li>
                <li>info@calopraz.ao</li>
                <li>Luanda, Angola</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 CALOPRAZ CONSULTORIA. Todos os direitos reservados.
            </p>
            <div className="mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4A017] transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A017] transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

