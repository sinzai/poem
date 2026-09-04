// 表示コンテンツデータ
const contentData = {
    title: "スキットルとモルック棒",
    subtitle: "好きぴに贈る、愛の詩。",
    
    sections: {
        hers: {
            label: "", // 不要な場合は空文字
            text: `あなたの雄々しいその横顔が
モルックを投げるモーションが
私の世界に光を照らしてくれました。

スキットルが倒れる音
転がっていく木の温もりに
少しだけ重ねていた恋心。

どれだけ距離が離れていても
私の心はあなたに倒されたまま。

私はあなたのスキットル。
あなたは私のモルック棒。

倒れた私を立ち上がらせて。
そしてあなたで私を倒して。
あなたと私はふたつでひとつ。
あなたがいないと私は存在意義がない、ただの木偶の坊。

あなたも私も50点。
セットになって、100点の人生を共に過ごしませんか。
たとえ25点に戻ったとしても、倒して、倒されて、また一緒に50点を目指しませんか。

あなたは私の片割れ。
私はあなたの片割れです。`
        }
    },
    
    footer: "© 神罪閣下製作委員会"
};

// DOMへのデータ反映処理
document.addEventListener("DOMContentLoaded", () => {
    document.title = contentData.title;
    document.getElementById("main-title").textContent = contentData.title;
    document.getElementById("main-subtitle").textContent = contentData.subtitle;

    const mainEl = document.querySelector("main");
    mainEl.innerHTML = ""; // 初期要素をクリア

    // 定義されているセクションのみ動的に生成・表示
    Object.keys(contentData.sections).forEach(key => {
        const sectionData = contentData.sections[key];
        
        const section = document.createElement("section");
        section.className = key;

        if (sectionData.label) {
            const label = document.createElement("div");
            label.className = "label";
            label.textContent = sectionData.label;
            section.appendChild(label);
        }

        const p = document.createElement("p");
        p.textContent = sectionData.text;
        section.appendChild(p);

        mainEl.appendChild(section);
    });

    document.getElementById("footer-text").textContent = contentData.footer;
});
