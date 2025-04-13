document.addEventListener('DOMContentLoaded', ()=>{
     const jobs = [
        {
            imgUrl: "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/10233694/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png",
            title: "Frontend Developer",
            postDate: "1 Apr 2025",
            candidates: 5,
            experience: "1 year",
            salary: "Negotiable",
            workType: "Full-Time",
            positionRole: "Software Developer"
        },
        {
            imgUrl: "https://newline.tech/wp-content/uploads/2023/07/Profession_-Backend-Developer.png",
            title: "Backend Engineer",
            postDate: "2 Apr 2025",
            candidates: 10,
            experience: "3 years",
            salary: "$4000/month",
            workType: "Remote",
            positionRole: "Team Leader"
        },
        {
            imgUrl: "https://www.keenesystems.com/hs-fs/hubfs/blog-images/ux-design.jpg?width=900&name=ux-design.jpg",
            title: "UX Designer",
            postDate: "3 Apr 2025",
            candidates: 3,
            experience: "2 years",
            salary: "Negotiable",
            workType: "Part-Time",
            positionRole: "Graphic Designer"
        }
    ];
     if (!localStorage.getItem('data')){
         localStorage.setItem('data', JSON.stringify(jobs));
     }
})