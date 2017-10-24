const jobs = [
  {
    id: 1,
    rank: 1,
    title: "React Developer",
    url: "https://www.google.com",
    status: "watching",
    active: true,
    company: {
      name: "Google",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 2,
    rank: 5,
    title: "Ruby on Rails Developer",
    url: "https://www.google.com",
    status: "applied",
    active: true,
    company: {
      name: "Facebook",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 3,
    rank: 0,
    title: "Cloud Engineer",
    url: "https://www.google.com",
    status: "watching",
    active: true,
    company: {
      name: "Microsoft",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 4,
    rank: 8,
    title: "Nodejs Developer",
    url: "https://www.google.com",
    status: "offer",
    active: true,
    company: {
      name: "wework",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 5,
    rank: 6,
    title: "Java Developer",
    url: "https://www.google.com",
    status: "applied",
    active: true,
    company: {
      name: "Tesla",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 6,
    rank: 7,
    title: "Python Developer",
    url: "https://www.google.com",
    status: "interviewed",
    active: true,
    company: {
      name: "GE",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 7,
    rank: 9,
    title: "Angular Developer",
    url: "https://www.google.com",
    status: "offer",
    active: true,
    company: {
      name: "NYU",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 8,
    rank: 4,
    title: "Front-end Developer",
    url: "https://www.google.com",
    status: "watching",
    active: true,
    company: {
      name: "Vornado",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 9,
    rank: 2,
    title: "Front-end Developer",
    url: "https://www.google.com",
    status: "watching",
    active: true,
    company: {
      name: "McDonalds",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 10,
    rank: 3,
    title: "Front-end Developer",
    url: "https://www.google.com",
    status: "watching",
    active: true,
    company: {
      name: "Subway",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
]


export default jobs

const jobsold = [
  {
   id: 1,
   title: "Front-end Developer",
   url: "https://www.google.com",
   status: "watching",
   company: {
     name: "Some Company",
     url: "https://www.google.com",
     industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 2,
    title: "Product Manager",
    url: "https://www.google.com",
    status: "watching",
    company: {
      name: "Some Company",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 3,
    title: "Back-end Developer",
    url: "https://www.google.com",
    status: "watching",
    company: {
      name: "Some Company",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 4,
    title: "Front-end Developer",
    url: "https://www.google.com",
    status: "watching",
    company: {
      name: "Some Company",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 5,
    title: "Back-end Developer",
    url: "https://www.google.com",
    status: "watching",
    company: {
      name: "Some Company",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 6,
    title: "Back-end Developer",
    url: "https://www.google.com",
    status: "watching",
    company: {
      name: "Some Company",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 7,
    title: "UX Designer",
    url: "https://www.google.com",
    status: "watching",
    company: {
      name: "Some Company",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 8,
    title: "Front-end Developer",
    url: "https://www.google.com",
    status: "watching",
    company: {
      name: "Some Company",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 9,
    title: "Front-end Developer",
    url: "https://www.google.com",
    status: "watching",
    company: {
      name: "Some Company",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 10,
    title: "Front-end Developer",
    url: "https://www.google.com",
    status: "watching",
    company: {
      name: "Some Company",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  },
  {
    id: 11,
    title: "Front-end Developer",
    url: "https://www.google.com",
    status: "watching",
    company: {
      name: "Some Company",
      url: "https://www.google.com",
      industry: "Technology"
    },
    contacts: [
      {
        id: 1,
        name: "Marlon Merjos",
        title: "Office Worker",
        email: "marmer@somecompany.com",
        last_contant: ""
      },
      {
        id: 2,
        name: "Bobby Huang",
        title: "Office Worker",
        email: "bh@somecompany.com",
        last_contant: ""
      }
    ]
  }
]
