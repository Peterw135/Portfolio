import ProjectCard from "@/components/ProjectCard";
import { AnimatedGroup } from "@/components/AnimatedGroup";

export default function Projects() {
    return (
        <div className="h-[calc(100vh-80px)] flex items-center justify-center">
            <div className="max-w-6xl p-8 m-auto">
            <h1 className="text-2xl font-bold">Stuff I Built</h1>
                <AnimatedGroup
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={{
                        container: {
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.05,
                                },
                            },
                        },
                        item: {
                            hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                                transition: {
                                    duration: 1.2,
                                    type: 'spring',
                                    bounce: 0.3,
                                },
                            },
                        },
                    }}
                >   
                    <ProjectCard
                        title="Breast Cancer Detection [WIP]"
                        description="Utilizing PyTorch and CNN to classify breast cancer as benign or malignant based on mammogram features. Check below for more details."
                        link="https://github.gatech.edu/pages/skorkaya6/mlgroup12/"
                    />
                    <ProjectCard 
                        title="Watermarker"
                        description="Winner of Adobe Express for Hackaton. Invited and approved for Adobe Fund for Design. Generates and applies a professional watermark to images on Adobe Express."
                        link="https://github.com/lenhatdangkhoa/ugahacks9"
                    />
                    <ProjectCard 
                        title="Personal Website"
                        description="Built with Next.js, Typescript, and Tailwind CSS. Animations with Framer Motion and Motion Primitives."
                        link="https://github.com/Peterw135/Portfolio.git"
                    />
                    <ProjectCard 
                        title="Credit Card Rewards Claimer"
                        description="Chrome extension to automatically claim rewards from credit card offers."
                        link="https://github.com/Peterw135/Credit-Card-Rewards-Claimer.git"
                    />
                    <ProjectCard 
                        title="Android Frogger"
                        description="Class Project for CS2340.Recreated the classic Frogger game using Android Studio."
                        link="https://github.com/Peterw135/Frogger.git"
                    />
                    <ProjectCard 
                        title="Garp"
                        description="Project for HackGT X. Developed a social media platform similar to Goodreads for research papers."
                        link="https://github.com/kvnshu/garp.git"
                    />
                </AnimatedGroup>
            </div>
        </div>
    )
}