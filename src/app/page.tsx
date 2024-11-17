import { TextEffect} from '@/components/TextEffect';
import { InView } from '@/components/InView';

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
            <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-2">Technical Skills</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Proficient in full-stack development with expertise in React, Next.js, 
                  and machine learning technologies. Experienced with Python, TypeScript, 
                  and modern web frameworks.
                </p>
              </div>
            </div>
          </InView>
        </div>
      </section>
    </>
  )
}