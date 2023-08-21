import { Image } from "../atoms/Image"
import bgImage from "../../assets/rays.png"
import apple from "../../assets/Vector (4).png"
import play from "../../assets/Vector (5).png"
import arrow from "../../assets/Vector (6).png"
import { HeroTexts } from "../particles/DataLists"
import { Button } from "../atoms/Button"



const HeroSection = () => {
    return (
        <section className="w-full h-screen relative overflow-x-hidden flex justify-end bg-black">
            <Image  image={bgImage} alt="Hero Background Vector"  className="w-full"/>
            <main className="w-full lg:h-full grid md:grid-cols-2 absolute top-0 left-0 md:px-8 px-5 pt-24 ">
                <div className="flex flex-col justify-center md:order-1 order-2 pt-80 ">
                    
                  
                   <div className="flex pt-24">
                    <div className="w-full flex md:justify-start justify-between items-center lg:gap-4 md:gap-4 gap-0">
                        <Button type="button" className=" lg:px-7 px-5 py-3 solid text-white font-bold rounded-lg border-white border  bg-black inline-flex">
                        <img alt='App Store' width={15}  src={apple} className="mr-2"/>
                            {HeroTexts.firstButton}
                        </Button>
                        <Button type="button" className=" lg:px-7 px-5 py-3 solid text-white font-bold rounded-lg border-white border  bg-black inline-flex">
                        <img alt='Google PLay' width={15}  src={play} className="mr-2"/>
                            {HeroTexts.secondButton}
                        </Button>
                       
                        </div>
                       <div className="flex-col items-center justify-center pl-50 pt-4">
                        <div className=""> <Image as="a" href="/" className="" image={arrow} alt="Logo" /></div>
                    
                       </div>
                       
                       <div className="inline-flex">
                      
                       </div>

                       </div>
                   
                </div>
               
                
            
            </main>
        </section>
    )
}

export default HeroSection