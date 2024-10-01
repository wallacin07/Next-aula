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
                }
            ]    
        
    }
};

export default nextConfig;
