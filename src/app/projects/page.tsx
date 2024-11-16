import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-6xl p-8 m-auto">
            <div className="grid grid-cols-3 gap-6">
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
                    description="Website to showcase my portfolio. Built with Next.js and Tailwind CSS"
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
                <ProjectCard 
                    title="More Projects"
                    description="Coming Soon"
                    link=""
                />
               <ProjectCard 
                    title="More Projects"
                    description="Coming Soon"
                    link=""
                />
                <ProjectCard 
                    title="More Projects"
                    description="Coming Soon"
                    link=""
                />
            </div>
        </div>
        </div>
    )
}