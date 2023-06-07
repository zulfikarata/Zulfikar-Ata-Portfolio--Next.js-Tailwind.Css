import Head from "next/head";
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import profil from "../public/profil.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import ataweb from "../public/ataweb.png";
import getirweb from "../public/getirweb.png";
import musicweb from "../public/musicweb.png";


export default function Home() {

  const [darkMode,setDarkMode]=useState(false);
  return (
    <div className={darkMode ? "dark" : ""} >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-x1">Welcome to My Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                onClick={()=> setDarkMode(!darkMode)}
                className="cursor-pointer text-2x1"
                />
              </li>
              <li>
                <a 
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>

            </ul>

          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6x1">

              Zülfikar Ata
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-2xl ">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-x1 mx-auto md:text-x1">
            Algoritma ve yazılım geliştirme teknikleri konusunda eğitim almış,
            kendini geliştirmeyi ve deneyim kazanmayı seven bir yazılım geliştiricisiyim.
            </p>
            <div className="text-3xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="mailto:zulfikarata07@gmail.com">
                <AiFillMail/>
              </a>
              <a href="http://github.com/zulfikarata">
                <AiFillGithub/>
              </a>
              <a href="https://www.linkedin.com/in/zulfikarata">
                <AiFillLinkedin/>
              </a>
              <a href="https://www.instagram.com/zlfkrata">
                <AiFillInstagram/>
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={profil} layout="fill" objectFit="cover" alt=""/>
            </div>

          </div>

        </section>
        <section>
          <div>
            <h3 className="text-3x1 py-1 dark:text-white">Sunduğum hizmetler</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Serbest tasarımcı olarak yolculuğumun başlangıcından beri ve
              geliştirici, için uzaktan çalışma yaptım
              <span className="text-teal-500">ajanslar</span>
              için danışıldı <span className="text-teal-500">başlangıçlar</span>
              ve dijital ürünler oluşturmak için yetenekli kişilerle işbirliği yaptım.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 ">
            Marka tasarımı da dahil olmak üzere geniş bir hizmet yelpazesinden 
            programlama sunuyorum.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className=" text-center shadow-lg p-10 rounded-x1 my-10 dark:bg-white flex-1">
            <Image src={design} width={100} height={100} alt=""/>
            <h3 className="text-lg font-medium pt-8 pb-2">
              Harika Tasarımlar
            </h3>
            <p className="py-2">
              Temel özellikleri takip ederek ihtiyaçlarınıza uygun şık tasarımlar yaratmak için
              tasarım teorisi.
            </p>
            <h4 className="py-4 text-teal-600">Kullandıgım Yazılım Dilleri</h4>
            <p className="text-gray-800 py-1">Node.js</p>
            <p className="text-gray-800 py-1">React.js</p>
            <p className="text-gray-800 py-1">Next.js</p>
            <p className="text-gray-800 py-1">Express.js</p>
            <p className="text-gray-800 py-1">C#</p>
            <p className="text-gray-800 py-1">Asp.Net</p>
            <p className="text-gray-800 py-1">MongoDB</p>
            <p className="text-gray-800 py-1">Microsoft SQL Server</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-x1 my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Hayalinizdeki projeyi kodlayın
              </h3>
              <p className="py-2">
                Bir sonraki harika web siteniz için bir fikriniz var mı? hadi bunu bir yapalım
                gerçekleştirelim.
              </p>
              <h4 className="py-4 text-teal-600">Kullandıgım Yazılım Dilleri</h4>
            <p className="text-gray-800 py-1">Node.js</p>
            <p className="text-gray-800 py-1">React.js</p>
            <p className="text-gray-800 py-1">Next.js</p>
            <p className="text-gray-800 py-1">Express.js</p>
            <p className="text-gray-800 py-1">C#</p>
            <p className="text-gray-800 py-1">Asp.Net</p>
            <p className="text-gray-800 py-1">MongoDB</p>
            <p className="text-gray-800 py-1">Microsoft SQL Server</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Danışmanlık</h3>
              <p className="py-2">
                Mevcut projeniz için geri bildirim almak ister misiniz? Yapabilirim
                seviye atlamak için size ipuçları ve püf noktaları verebilirim.
              </p>
            <h4 className="py-4 text-teal-600">Kullandıgım Yazılım Dilleri</h4>
            <p className="text-gray-800 py-1">Node.js</p>
            <p className="text-gray-800 py-1">React.js</p>
            <p className="text-gray-800 py-1">Next.js</p>
            <p className="text-gray-800 py-1">Express.js</p>
            <p className="text-gray-800 py-1">C#</p>
            <p className="text-gray-800 py-1">Asp.Net</p>
            <p className="text-gray-800 py-1">MongoDB</p>
            <p className="text-gray-800 py-1">Microsoft SQL Server</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portföy</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Serbest tasarımcı olarak yolculuğumun başlangıcından beri ve
              geliştirici için uzaktan çalışma yaptım. 
               <span className="text-teal-500"> Ajanslar </span>
              için danışıldı.<span className="text-teal-500">Başlangıçlar </span>
              ve dijital ürünler oluşturmak için yetenekli kişilerle işbirliği yaptım.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Marka tasarımı da dahil olmak üzere geniş bir hizmet yelpazesinden 
              programlama sunuyorum.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={ataweb}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={getirweb}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={musicweb}
                alt=""
              />
            </div>
          </div>

        </section>
        
      </main>

    </div>
  );
}
