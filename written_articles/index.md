---
layout: poem
title: "投稿文章"
permalink: /written_articles/
back_url: /
---

<div class="article-hub">
  <div class="article-list">
    <!-- Replace the img src with your actual thumbnail image later -->
    <a href="https://opinion.cw.com.tw/blog/profile/52/article/14369" class="article-card" target="_blank" rel="noopener">
      <div class="article-card-image-wrapper">
        <img src="https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcdn-opinion.cw.com.tw%2Farticle%2F202312%2Farticle-657fca4b9cd00.jpg/?w=900&format=webp" alt="國文教學怎麼了" class="article-card-image">
      </div>
      <div class="article-card-content">
        <div class="article-card-info">
          <span class="article-card-source">天下獨立評論</span>
          <span class="article-card-title">「國文教學怎麼了？一位『資管學生』對國文教學的體悟」</span>
        </div>
        <i class="fas fa-external-link-alt article-card-arrow"></i>
      </div>
    </a>
  </div>
</div>

<style>
  .article-hub {
    max-width: 650px;
    margin: 0 auto;
  }
  .article-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .article-card {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    background: #fff;
  }
  .article-card:hover {
    background: rgba(91, 110, 225, 0.03);
    border-color: rgba(91, 110, 225, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    text-decoration: none;
    color: inherit;
  }
  .article-card-image-wrapper {
    flex-shrink: 0;
    width: 140px;
    position: relative;
    overflow: hidden;
    background-color: #f5f5f5;
  }
  .article-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }
  .article-card:hover .article-card-image {
    transform: scale(1.05);
  }
  .article-card-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    padding: 1.25rem 1.5rem;
    gap: 1rem;
  }
  .article-card-info {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .article-card-source {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: #5b6ee1;
    text-transform: uppercase;
  }
  .article-card-title {
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.5;
  }
  .article-card-arrow {
    flex-shrink: 0;
    opacity: 0.3;
    font-size: 0.85rem;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  .article-card:hover .article-card-arrow {
    opacity: 0.8;
    transform: translateX(3px) scale(1.1);
    color: #5b6ee1;
  }
  
  /* Dark theme */
  .dark-theme .article-card { 
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255,255,255,0.1); 
  }
  .dark-theme .article-card:hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.25);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
  .dark-theme .article-card-image-wrapper {
    background-color: #2a2a2a;
  }
  
  /* Mobile Responsive */
  @media (max-width: 500px) {
    .article-card {
      flex-direction: column;
    }
    .article-card-image-wrapper {
      width: 100%;
      height: 180px;
    }
    .article-card-content {
      padding: 1rem 1.25rem;
    }
  }
</style>
