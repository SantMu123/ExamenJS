
export const MovieShow = async (MainData) => {
    let data = await MainData()
    let peliculas = data.description
    console.log(peliculas)
    const wrap1 = document.querySelector("my-element")
    console.log(wrap1)
    const wrap2 = wrap1.shadowRoot.querySelector("my-main-content")
    const wrap3 = wrap2.shadowRoot.querySelector("my-middle-content")
    console.log(wrap2)
    console.log(wrap3)
    const infoData = wrap3.shadowRoot.querySelector(".info-data")
    console.log(infoData)
    infoData.innerHTML = ""
    peliculas.forEach(pel => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.setAttribute("id",`${pel["#TITLE"]}`)
        div.innerHTML = `
            <img class="producto-imagen" src="${pel["#IMG_POSTER"]}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${pel["#TITLE"]}</h3>
                <p class="producto-precio">${pel["#YEAR"]}</p>
                <p class="producto-ranking">${pel["#RANK"]}</p>
                <button class="producto-agregar" id="${pel["#ACTORS"]}">Ver</button>
            </div>
        `;
        div.style.display = "flex"
        div.style.flexDirection = "column"
        div.style.alignItems = "center"
        div.style.justifyContent = "center"

        const img = div.querySelector('.producto-imagen');
        if (img) {
            //img.style.maxWidth = '100%';
            img.style.borderRadius = '1rem';
            img.style.width = '250px';
            img.style.height = '300px'; 
            img.style.objectFit = 'cover'; 
            img.style.borderRadius = '1rem';
        }
        infoData.append(div)
        
    });
    
    


}

export const MovieShowActors = async (MainData) => {
    let data = await MainData()
    let peliculas = data.description
    console.log(peliculas)
    const wrap1 = document.querySelector("my-element")
    console.log(wrap1)
    const wrap2 = wrap1.shadowRoot.querySelector("my-main-content")
    const wrap3 = wrap2.shadowRoot.querySelector("my-middle-content")
    console.log(wrap2)
    console.log(wrap3)
    const infoData = wrap3.shadowRoot.querySelector(".info-data")
    console.log(infoData)
    infoData.innerHTML = ""
    peliculas.forEach(pel => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.setAttribute("id",`${pel["#TITLE"]}`)
        div.innerHTML = `
            <div class="producto-detalles">
                <h3 class="producto-titulo">${pel["#ACTORS"]}</h3>
                <p class="producto-titulo">${pel["#TITLE"]}</p>
                <button class="producto-agregar" id="${pel["#ACTORS"]}">Ver</button>
            </div>
        `;
        div.style.display = "flex"
        div.style.flexDirection = "column"
        div.style.alignItems = "center"
        div.style.justifyContent = "center"

        const img = div.querySelector('.producto-imagen');
        if (img) {
            //img.style.maxWidth = '100%';
            img.style.borderRadius = '1rem';
            img.style.width = '250px';
            img.style.height = '300px'; 
            img.style.objectFit = 'cover'; 
            img.style.borderRadius = '1rem';
        }
        infoData.append(div)
        
    });
    
    


}

export const MovieShowTitles = async (MainData) => {
    let data = await MainData()
    let peliculas = data.description
    console.log(peliculas)
    const wrap1 = document.querySelector("my-element")
    console.log(wrap1)
    const wrap2 = wrap1.shadowRoot.querySelector("my-main-content")
    const wrap3 = wrap2.shadowRoot.querySelector("my-middle-content")
    console.log(wrap2)
    console.log(wrap3)
    const infoData = wrap3.shadowRoot.querySelector(".info-data")
    console.log(infoData)
    infoData.innerHTML = ""
    peliculas.forEach(pel => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.setAttribute("id",`${pel["#TITLE"]}`)
        div.innerHTML = `
            <div class="producto-detalles">
                <h2 class="producto-titulo">${pel["#TITLE"]}</h2>
                <button class="producto-agregar" id="${pel["#ACTORS"]}">Ver</button>
            </div>
        `;
        div.style.display = "flex"
        div.style.flexDirection = "column"
        div.style.alignItems = "center"
        div.style.justifyContent = "center"

        const img = div.querySelector('.producto-imagen');
        if (img) {
            //img.style.maxWidth = '100%';
            img.style.borderRadius = '1rem';
            img.style.width = '250px';
            img.style.height = '300px'; 
            img.style.objectFit = 'cover'; 
            img.style.borderRadius = '1rem';
        }
        infoData.append(div)
        
    });
    
    


}

export const MovieShowIDandTitles = async (MainData) => {
    let data = await MainData()
    let peliculas = data.description
    console.log(peliculas)
    const wrap1 = document.querySelector("my-element")
    console.log(wrap1)
    const wrap2 = wrap1.shadowRoot.querySelector("my-main-content")
    const wrap3 = wrap2.shadowRoot.querySelector("my-middle-content")
    console.log(wrap2)
    console.log(wrap3)
    const infoData = wrap3.shadowRoot.querySelector(".info-data")
    console.log(infoData)
    infoData.innerHTML = ""
    peliculas.forEach(pel => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.setAttribute("id",`${pel["#TITLE"]}`)
        div.innerHTML = `
            <div class="producto-detalles">
                <h2 class="producto-titulo">${pel["#IMDB_ID"]} And ${pel["#TITLE"]}</h2>
                <button class="producto-agregar" id="${pel["#ACTORS"]}">Ver</button>
            </div>
        `;
        div.style.display = "flex"
        div.style.flexDirection = "column"
        div.style.alignItems = "center"
        div.style.justifyContent = "center"

        const img = div.querySelector('.producto-imagen');
        if (img) {
            //img.style.maxWidth = '100%';
            img.style.borderRadius = '1rem';
            img.style.width = '250px';
            img.style.height = '300px'; 
            img.style.objectFit = 'cover'; 
            img.style.borderRadius = '1rem';
        }
        infoData.append(div)
        
    });
    
    


}

export const MovieShowURLs = async (MainData) => {
    let data = await MainData()
    let peliculas = data.description
    console.log(peliculas)
    const wrap1 = document.querySelector("my-element")
    console.log(wrap1)
    const wrap2 = wrap1.shadowRoot.querySelector("my-main-content")
    const wrap3 = wrap2.shadowRoot.querySelector("my-middle-content")
    console.log(wrap2)
    console.log(wrap3)
    const infoData = wrap3.shadowRoot.querySelector(".info-data")
    console.log(infoData)
    infoData.innerHTML = ""
    peliculas.forEach(pel => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.setAttribute("id",`${pel["#TITLE"]}`)
        div.innerHTML = `
            <div class="producto-detalles">
                <small>
                    IMDB_URL
                    <h2 class="producto-titulo">${pel["#IMDB_URL"]}</h2>
                </small>
                <small>
                    IMDB_URL:
                    <h2 class="producto-titulo">${pel["#IMDB_IV"]}</h2>
                </small>
                <small>
                    Img Poster:
                    <h2 class="producto-titulo">${pel["#IMG_POSTER"]}</h2>
                </small>
                
                
                <button class="producto-agregar" id="${pel["#ACTORS"]}">Ver</button>
            </div>
        `;
        div.style.display = "flex"
        div.style.flexDirection = "column"
        div.style.alignItems = "center"
        div.style.justifyContent = "center"

        infoData.append(div)
        
    });
    
    


}