export const  loadTopics= async () => {
        // get Products
        const topicsData = await fetch('https://openapi.programming-hero.com/api/quiz');
        const topics = await topicsData.json();
        return topics.data;
}