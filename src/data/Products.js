const products = [
    {
      id: 1,
      name: 'Darth Maul',
      image: `${process.env.PUBLIC_URL}/img/darth-maul1.png`,
      hoverImage: `${process.env.PUBLIC_URL}/img/Darth-Maul2.png`,
      description: 'REGULAR 4" DARTH MAUL SPECIAL EDITION, BUBBLE HEAD ECLUSIVE OF the 25th Anniversary of Star Wars: The Phantom Menace™ celebration!',
      category: 'Sci-Fi',
      license: 'Star Wars',
      price: 19.99,
    },
    {
        id: 2, 
        name: 'Darth Vader', 
        image: `${process.env.PUBLIC_URL}/img/darth-vader1.png`,
        hoverImage: `${process.env.PUBLIC_URL}/img/darth-vader2.png`,
        description:'Exclusive Halloween Darth Vader ',
        category:'Sci-Fi',
        license:'Star Wars',
        price: 19.99,
    },
    {
        id: 3,
        name: 'Jake Sully', 
        image: `${process.env.PUBLIC_URL}/img/jake-sully1.png`,
        description:'Regular 4" Avatar Jake Sully',
        category:'Sci-Fi',
        license:'Avatar', 
        hoverImage: `${process.env.PUBLIC_URL}/img/jake-sully2.png`,
        price:19.99,
    },
    { 
        id: 4, 
        name: 'Neytiri', 
        image: `${process.env.PUBLIC_URL}/img/neytiri.png`,
        description:'Regular Avatar Neytiri',
        category:'Sci-Fi',
        license:'Avatar', 
        hoverImage: `${process.env.PUBLIC_URL}/img/neytiri2.png`,
        price:19.99
    },
    { 
        id: 5, 
        name: 'Jimmy', 
        image: `${process.env.PUBLIC_URL}/img/jimmy1.png`,
        description:'Regular Rebel Moon Jimmy pop',
        category:'Sci-Fi',
        license:'Rebel Moon', 
        hoverImage: `${process.env.PUBLIC_URL}/img/jimmy2.png`,
        price:19.99
    },
    { 
        id: 6, 
        name: 'Neytiri', 
        image: `${process.env.PUBLIC_URL}/img/neytiri.png`,
        description:'Regular Avatar Neytiri',
        category:'Sci-Fi',
        license:'Avatar', 
        hoverImage: `${process.env.PUBLIC_URL}/img/neytiri2.png`,
        price:19.99
    },
    { 
        id: 7, 
        name: 'Sylvanas', 
        image: `${process.env.PUBLIC_URL}/img/sylvanas1.png`,
        description:'Regular Avatar Neytiri',
        category:'Video Games',
        license:'Avatar', 
        hoverImage: `${process.env.PUBLIC_URL}/img/sylvanas1.png`,
        price:19.99
    },
    { 
        id: 8, 
        name: 'Amy Rose', 
        image: `${process.env.PUBLIC_URL}/img/amy1.png`,
        description:'Regular Avatar Neytiri',
        category:'Video Games',
        license:'Avatar', 
        hoverImage: `${process.env.PUBLIC_URL}/img/amy2.png`,
        price:19.99
    },
    { 
        id: 9, 
        name: 'Dennis Rodman', 
        image: `${process.env.PUBLIC_URL}/img/rodman1.png`,
        description:'Regular NBA Dennis Rodman',
        category:'Sports',
        license:'NBA', 
        hoverImage: `${process.env.PUBLIC_URL}/img/rodman2.png`,
        price:19.99
    },
    { 
        id: 10, 
        name: 'Seth Rollins', 
        image: `${process.env.PUBLIC_URL}/img/seth_rollins.png`,
        description:'Regular WWE Super star Seth Rollins Funko Pop',
        category:'Sports',
        license:'WWE', 
        hoverImage: `${process.env.PUBLIC_URL}/img/seth_rollins2.png`,
        price:19.99
    },
    { 
        id: 11, 
        name: 'The Undertaker', 
        image: `${process.env.PUBLIC_URL}/img/undertaker.png`,
        description:'Regular WWE Super Star The UnderTaker Funko Pop',
        category:'Sports',
        license:'WWE', 
        hoverImage: `${process.env.PUBLIC_URL}/img/undertaker2.png`,
        price:19.99
    },
    
    { 
        id: 12, 
        name: 'Rick Rude', 
        image: `${process.env.PUBLIC_URL}/img/Rick_Rude1.png`,
        description:'Regular WWE Super Star Rick Rude Funko Pop',
        category:'Sports',
        license:'WWE', 
        hoverImage: `${process.env.PUBLIC_URL}/img/Rick_Rude2.png`,
        price:19.99
    },
    
    
    { 
        id: 13, 
        name: 'Stone Cold', 
        image: `${process.env.PUBLIC_URL}/img/stonecold1.png`,
        description:'Regular WWE Super Star Stone cold "Steve Austin" Pop',
        category:'Sports',
        license:'WWE', 
        hoverImage: `${process.env.PUBLIC_URL}/img/stonecold2.png`,
        price:19.99
    },
    { 
        id: 14, 
        name: 'Michael Jordan', 
        image: `${process.env.PUBLIC_URL}/img/MJ1.png`,
        description:'Regular NBA Star Michale Jordan, Chicago Bulls',
        category:'Sports',
        license:'NBA', 
        hoverImage: `${process.env.PUBLIC_URL}/img/MJ2.png`,
        price:19.99
    },
    { 
        id: 15, 
        name: 'Anthony Davis', 
        image: `${process.env.PUBLIC_URL}/img/davis1.png`,
        description:'Regular NBA Star Anthony Davis, LA Lakers',
        category:'Sports',
        license:'NBA', 
        hoverImage: `${process.env.PUBLIC_URL}/img/davis2.png`,
        price:19.99
    },
    { 
        id: 16, 
        name: 'Lebron James', 
        image: `${process.env.PUBLIC_URL}/img/lebron_james1.png`,
        description:'Regular NBA Star Lebron James, LA Lakers',
        category:'Sports',
        license:'NBA', 
        hoverImage: `${process.env.PUBLIC_URL}/img/lebron_james2.png`,
        price:19.99
    },
    { 
        id: 17, 
        name: 'Tupac', 
        image: `${process.env.PUBLIC_URL}/img/tupac1.png`,
        description:'Regular hip hop Star Tupac, Reguar Funko Pop',
        category:'Music',
        license:'ThugLife', 
        hoverImage: `${process.env.PUBLIC_URL}/img/tupac2.png`,
        price:19.99
    },
    { 
        id: 18, 
        name: 'Slash', 
        image: `${process.env.PUBLIC_URL}/img/slash1.png`,
        description:'Regular Rock Star Slash, Regular Funko Pop',
        category:'Music',
        license:'Guns And Roses', 
        hoverImage: `${process.env.PUBLIC_URL}/img/slash2.png`,
        price:19.99
    },
    { 
        id: 19, 
        name: 'Freddy Mercury', 
        image: `${process.env.PUBLIC_URL}/img/mercury1.png`,
        description:'Regular rock Star Quen singer,Freddy Mercury, Reguar Funko Pop',
        category:'Music',
        license:'Queen', 
        hoverImage: `${process.env.PUBLIC_URL}/img/mercury2.png`,
        price:19.99
    },
    { 
        id: 20, 
        name: 'Michael Jackson', 
        image: `${process.env.PUBLIC_URL}/img/jackson1.png`,
        description:'The King of POP,Michael Jackson, Regular Funko Pop',
        category:'Music',
        license:'MJ', 
        hoverImage: `${process.env.PUBLIC_URL}/img/jackson2.png`,
        price:19.99
    },
    { 
        id: 21, 
        name: 'Scorpion', 
        image: `${process.env.PUBLIC_URL}/img/scorpion1.png`,
        description:'The fires comes with this Scorpion Funko Pop',
        category:'Video Games',
        license:'Mortal Kombat', 
        hoverImage: `${process.env.PUBLIC_URL}/img/scorpion2.png`,
        price:19.99
    },
    { 
        id: 22, 
        name: 'Liu Kang', 
        image: `${process.env.PUBLIC_URL}/img/liukang.png`,
        description:'One of the first figthers in Mortal Kombat, Liu Kang',
        category:'Video Games',
        license:'Mortal Kombat', 
        hoverImage: `${process.env.PUBLIC_URL}/img/liukang2.png`,
        price:19.99
    },
    { 
        id: 23, 
        name: 'Kid Goku SS3', 
        image: `${process.env.PUBLIC_URL}/img/kidgokuss31.png`,
        description:'This kid goku of dragon ball gt, comes to help you fight villains. ',
        category:'Anime',
        license:'Dragon BAll GT', 
        hoverImage: `${process.env.PUBLIC_URL}/img/kidgokuss32.png`,
        price:19.99
    },
    { 
        id: 24, 
        name: 'Fuzed Zamasu', 
        image: `${process.env.PUBLIC_URL}/img/zamasu1.png`,
        description:'This exclusive, glow-in-the-dark fusion is looking to defeat his enemies in your Dragon Ball Super collection.',
        category:'Anime',
        license:'Dragon Super', 
        hoverImage: `${process.env.PUBLIC_URL}/img/zamasu.png`,
        price:19.99
    },
    { 
        id: 25, 
        name: 'Kamado Tanjiro', 
        image: `${process.env.PUBLIC_URL}/img/tanjiro.png`,
        description:'This Tanjiro is perfcet to start the Demon Slayer Collection.',
        category:'Anime',
        license:'Kimetsu no Yaiba', 
        hoverImage: `${process.env.PUBLIC_URL}/img/tanjiro2.png`,
        price:19.99
    },
    { 
        id: 26, 
        name: 'Roronoa Zoro', 
        image: `${process.env.PUBLIC_URL}/img/zoro1.png`,
        description:'Roronoa Zoro comes to help you find the one piece.',
        category:'Anime',
        license:'One Piece', 
        hoverImage: `${process.env.PUBLIC_URL}/img/zoro2.png`,
        price:19.99
    },
    { 
        id: 27, 
        name: 'Donald Duck', 
        image: `${process.env.PUBLIC_URL}/img/donald1.png`,
        description:'classic Donald Duck.',
        category:'Cartoons',
        license:'Disney', 
        hoverImage: `${process.env.PUBLIC_URL}/img/donald2.png`,
        price:19.99
    },
    { 
        id: 28, 
        name: 'Leonardo', 
        image: `${process.env.PUBLIC_URL}/img/leonardo1.png`,
        description:'Ninja turtle Leonardo.',
        category:'Cartoons',
        license:'Ninja Turtles', 
        hoverImage: `${process.env.PUBLIC_URL}/img/leonardo2.png`,
        price:19.99
    },
    { 
        id: 29, 
        name: 'Moana', 
        image: `${process.env.PUBLIC_URL}/img/moana1.png`,
        description:'Regular Moana princess 4 inch.',
        category:'Cartoons',
        license:'Disney princess', 
        hoverImage: `${process.env.PUBLIC_URL}/img/moana2.png`,
        price:19.99
    },
    { 
        id: 30, 
        name: 'Raphael', 
        image: `${process.env.PUBLIC_URL}/img/raphael.png`,
        description:'teen Ninja Turtle Raphael.',
        category:'Cartoons',
        license:'teen Ninja Turtles', 
        hoverImage: `${process.env.PUBLIC_URL}/img/raphael2.png`,
        price:19.99
    },


  ];
  
  export default products;