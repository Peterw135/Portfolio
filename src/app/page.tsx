import { TextEffect} from '@/components/TextEffect';
import { InView } from '@/components/InView';
import { FaPython, FaReact, FaNodeJs, FaJava, FaGithub } from 'react-icons/fa';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiNextjsFill, RiFirebaseFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiFlask, SiMysql, SiAndroidstudio } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export default function Home() {
  return (
    <>
      <main className="flex h-[calc(100vh-80px)] items-center justify-center px-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight">
            Computer Science Student,{" "}
            <TextEffect 
              className="text-blue-400" 
              per="char" 
              preset="fade"
            >
              Aspiring Software Engineer
            </TextEffect>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
            Hello! My name is Peter Wang. I am a Senior at Georgia Institute of Technology 
            Studying Machine Learning and Learning Full Stack Development. I live in Metro Atlanta, 
            and I am Seeking Full-Time Software Engineering Opportunities.
          </p>
        </div>
      </main>

      <section className="min-h-screen px-12 py-24">
        <div className="max-w-3xl mx-auto">
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ margin: '0px 0px -200px 0px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <h3 className="font-semibold text-xl">How I Got into Programming</h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-5">
                <p className="text-gray-600 dark:text-gray-400 flex gap-2"></p>
                <p>My first time programming was in high school when my high school first introduced a programming class. At first I didnt enjoy programming 
                  because we worked with Turtle code which I thought was boring. Over COVID-19, I kept seeing articles about how Machine Learning was accelerating
                  our development of the vaccine and I realized that coding was more than just turtle code. Later on I also learned about the world of sneaker reselling
                  and how people were using software to increase their chance of getting a limited shoe. I tried creating my own software but realized that it was more than 
                  just writing scripts as there are anti-bot measures in place. As someone who was undecided on their major at the time, I realized that Computer Science
                  was the field I wanted to pursue.
                </p>
              </div>
              <h3 className="font-semibold text-xl">Stuff I Worked With</h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-5">
                <p className="text-gray-600 dark:text-gray-400 flex gap-2">
                  <VscVscode className="size-12" />
                  <SiAndroidstudio className="size-12" />
                  <FaGithub className="size-12" />
                  <FaPython className="size-12" />
                  <FaJava className="size-12" />
                  <FaReact className="size-12" />
                  <RiNextjsFill className="size-12" />
                  <RiTailwindCssFill className="size-12" />
                  <TbBrandTypescript className="size-12" />
                  <FaNodeJs className="size-12" />
                  <SiFlask className="size-12" />
                  <RiFirebaseFill className="size-12" />
                  <SiMysql className="size-12" />
                </p>
              </div>
              
          </InView>
        </div>
      </section>
    </>
  )
}