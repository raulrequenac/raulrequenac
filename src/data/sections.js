import educations from './educations'
import languages from './languages'
import projects from './projects'

const { englishEducations, spanishEducations } = educations
const { englishLanguages, spanishLanguages } = languages
const { englishProjects, spanishProjects } = projects

const englishSections = [{
  title: 'Profile',
  quote: '"Inside us there is something that has no name, that something is what we are".\n- José Saramago',
  subtitles: [{
      name: 'About me',
      description: 'Passionate about the world of creativity, programming, design and technology. Merging these disciplines always generate differentiating and unique results. Web development allows me to find the balance between these passions.'
    }, {
      name: 'Details',
      details: [{
        name: 'Name',
        description: 'Raúl Requena Cayuso'
      }, {
        name: 'Age',
        description: 'years'
      }, {
        name: 'Location',
        description: 'Málaga, Andalusia, Spain'
      }]
  }]
}, {
  title: 'Experiences',
  quote: '"There is only one good, knowledge, and one evil, ignorance".\n- Socrates',
  subtitles: [{
    name: 'Educations',
    educations: englishEducations
  }, {
    name: 'Careers'
  }]
}, {
  title: 'Abilities',
  quote: '"The only long-term competitive skill is the ability to learn".\n- Seymour Papert',
  subtitles: [{
    name: 'Skills',
    repository: {
      description: 'This project has been developed with React',
      button: 'See project on Github'
    }
  }, {
    name: 'Languages',
    languages: englishLanguages
  }]
}, {
  title: 'Projects',
  quote: '"I am a great believer in luck and I find the harder I work, the more I have of it".\n- Stephen Leacock',
  projects: englishProjects
}, {
  title: 'Contact',
  quote: '"Nothing is more expensive than a missed opportunity".\n- H. Jackson Brown JR.',
  success: 'Your mail has been sent succesfully!',
  email: {
    description: 'Your e-mail',
    placeholder: 'Enter your e-mail'
  },
  subject: {
    description: 'Subject',
    placeholder: 'Enter a subject'
  },
  message: {
    description: 'Message',
    placeholder: 'Write a message'
  },
  sendEmail: 'Send e-mail'
}]

const spanishSections = [{
  title: 'Perfil',
  quote: '"Dentro de nosotros existe algo que no tiene nombre y eso es lo que realmente somos".\n- José Saramago',
  subtitles: [
    {
      name: 'Sobre mí',
      description: 'Apasionado por el mundo de la creatividad, la programación, el diseño y la tecnología. Unir esas disciplinas siempre generan resultados únicos y diferenciadores. El Desarrollo Web me permite encontrar el equilibrio entre esas pasiones.'
    }, {
      name: 'Datos',
      details: [{
        name: 'Nombre',
        description: 'Raúl Requena Cayuso'
      }, {
        name: 'Edad',
        description: 'años'
      }, {
        name: 'Ubicación',
        description: 'Málaga, Andalucía, España'
      }]
    }
  ]
}, {
  title: 'Experiencias',
  quote: '"Solo hay un bien, el conocimiento, y un mal, la ignorancia".\n- Sócrates',
  subtitles: [{
    name: 'Formación',
    educations: spanishEducations
  }, {
    name: 'Careers'
  }]
}, {
  title: 'Habilidades',
  quote: '"La única habilidad competitiva a largo plazo es la habilidad para aprender".\n- Seymour Papert',
  subtitles: [{
    name: 'Conocimientos',
    repository: {
      description: 'Este proyecto se ha desarrollado con React',
      button: 'Ver proyecto en Github'
    }
  }, {
    name: 'Idiomas',
    languages: spanishLanguages
  }]
}, {
  title: 'Proyectos',
  quote: '"Soy un gran creyente en la suerte y he descubierto que cuanto más duro trabajo, más suerte tengo".\n- Stephen Leacock',
  projects: spanishProjects
}, {
  title: 'Contacto',
  quote: '"No hay nada más caro que una oportunidad perdida".\n- H. Jackson Brown JR.',
  success: '¡Su correo se ha enviado con éxito!',
  email: {
    description: 'Su correo',
    placeholder: 'Introduzca su correo'
  },
  subject: {
    description: 'Asunto',
    placeholder: 'Introduzca un asunto'
  },
  message: {
    description: 'Mensaje',
    placeholder: 'Escriba un mensaje'
  },
  sendEmail: 'Enviar correo'
}]

export default {
  englishSections,
  spanishSections
}