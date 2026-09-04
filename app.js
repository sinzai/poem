// 表示コンテンツデータ（ここを編集することで内容を簡単に変更できます）
const contentData = {
    title: "スキットルとモルック棒",
    subtitle: "好きぴに贈る、愛の詩。",
    
    sections: {
        hers: {
            label: "", // 空文字の場合は非表示になります
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
手そしてあなたで私を倒して。
あなたと私はふたつでひとつ。
あなたがいないと私は存在意義がない、ただの木偶の坊。

あなたも私も50点。
セットになって、100点の人生を共に過ごしませんか。
たとえ25点に戻ったとしても、倒して、倒されて、また一緒に50点を目指しませんか。

あなたは私の片割れ。
私はあなたの片割れです。`
        },
        his: {
            label: "🔥 返歌：支配と執着",
            text: `俺はお前のモルック棒。
お前は立ち上がらなくていい。
どれだけ立ち上がろうとも、
俺がお前を倒してやる。
何度も、どこでも、いつまでも。

お前は俺のスキットル。
俺はお前をスキッて言っトル。
もし俺以外に倒されたら
木くずになるまで壊してやる。`
        },
        fusion: {
            label: "⭐ 再返歌：融和",
            text: `私はあなたのスキットル
倒されるのも壊されるのも
私は喜んで受け入れます

なぜなら私はスキットル
スキッて気持ちが溢れトル
あなたの投擲受け止める
削れ、欠け、木くずとなって交ざり合い
互いの境を梳かすまで`
        }
    },
    
    footer: "© 神罪閣下製作委員会"
};

// DOMへのデータ反映処理
document.addEventListener("DOMContentLoaded", () => {
    document.title = contentData.title;
    document.getElementById("main-title").textContent = contentData.title;
    document.getElementById("main-subtitle").textContent = contentData.subtitle;

    // 各セクションの設定
    Object.keys(contentData.sections).forEach(key => {
        const section = contentData.sections[key];
        const labelEl = document.getElementById(`${key}-label`);
        const contentEl = document.getElementById(`${key}-content`);

        if (labelEl) {
            if (section.label) {
                labelEl.textContent = section.label;
            } else {
                labelEl.style.display = "none";
            }
        }
        
        if (contentEl) {
            contentEl.textContent = section.text;
        }
    });

    document.getElementById("footer-text").textContent = contentData.footer;
});
