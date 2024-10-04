/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
                {
                    source:"/",
                    destination:"/home",
                    },
                {
                    source:"/matematica",
                    destination: "/maths"
                    },
                {
                    source:"/funcaoGeral",
                    destination: "/generalFunction"
                },
                {
                    source:"/pagina-com-fetch",
                    destination:"/fetch-page"
                }
            ]    
        
    }
};

export default nextConfig;
