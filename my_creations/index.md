---
layout: poem
title: "文學創作"
permalink: /my_creations/
back_url: /
---

<div class="poetry-hub">
  <div class="poetry-hashtags">
    <span class="poetry-tag">#用生活書寫生命的答案</span>
    <span class="poetry-tag">#熱愛可抵時間漫長</span>
  </div>

  <div class="poetry-list">
    {% assign poems = site.pages
      | where_exp: "p", "p.path contains 'my_creations/'"
      | where_exp: "p", "p.path != 'my_creations/index.md'"
      | sort: "order" %}
    {% for poem in poems %}
    <a href="{{ poem.url | relative_url }}" class="poetry-card">
      <span class="poetry-card-title">{{ poem.title }}</span>
      <i class="fas fa-chevron-right poetry-card-arrow"></i>
    </a>
    {% endfor %}
  </div>
</div>

<style>
  .poetry-hub {
    max-width: 520px;
    margin: 0 auto;
  }

  /* Hashtag lines */
  .poetry-hashtags {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-bottom: 2.25rem;
  }
  .poetry-tag {
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    opacity: 0.55;
  }

  /* Poem cards */
  .poetry-list {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }
  .poetry-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    font-size: 1.05rem;
    font-weight: 500;
    transition: background 0.18s ease, transform 0.15s ease, border-color 0.18s ease;
  }
  .poetry-card:hover {
    background: rgba(91, 110, 225, 0.07);
    border-color: rgba(91, 110, 225, 0.3);
    transform: translateX(5px);
    text-decoration: none;
    color: inherit;
  }
  .poetry-card-arrow {
    opacity: 0.3;
    font-size: 0.8rem;
    transition: opacity 0.18s ease, transform 0.15s ease;
  }
  .poetry-card:hover .poetry-card-arrow {
    opacity: 0.65;
    transform: translateX(2px);
  }

  /* Dark theme */
  .dark-theme .poetry-card { border-color: rgba(255,255,255,0.1); }
  .dark-theme .poetry-card:hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.25);
  }
</style>
