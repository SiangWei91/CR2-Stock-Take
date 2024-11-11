// 示例产品数据
const products = [
    {
        barcode: "50272",
        name: "企鹅 PENGUIN STYLE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "企鹅 PENGUIN STYLE", packaging: "500g x 20pkt", itemCode: "50272" },
            { type: "PKT", name: "企鹅 PENGUIN STYLE", packaging: "500g/pkt", itemCode: "50273" }
        ],
        scanned: false
    },
    {
        barcode: "50284",
        name: "竹蟹棒 CRAB FLAVOURED STICK FISH ROLL",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "竹蟹棒 CRAB FLAVOURED STICK FISH ROLL", packaging: "500g x 20pkt", itemCode: "50284" },
            { type: "PKT", name: "竹蟹棒  CRAB FLAVOURED STICK FISH ROLL", packaging: "500g/pkt", itemCode: "50285" }
        ],
        scanned: false
    },
    {
        barcode: "50282",
        name: "棒棒卷 KANI MAKI",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "棒棒卷 KANI MAKI", packaging: "500g x 20pkt", itemCode: "50282" },
            { type: "PKT", name: "棒棒卷 KANI MAKI", packaging: "500g/pkt", itemCode: "50283" }
        ],
        scanned: false
    },
    {
        barcode: "50278",
        name: "卡通鱼饼 ZUZU FISH CAKE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "卡通鱼饼 ZUZU FISH CAKE", packaging: "500g x 20pkt", itemCode: "50278" },
            { type: "PKT", name: "卡通鱼饼 ZUZU FISH CAKE", packaging: "500g/pkt", itemCode: "50279" }
        ],
        scanned: false
    },
    {
        barcode: "40648",
        name: "彩虹鱼饼 FISH CAKE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "彩虹鱼饼 FISH CAKE", packaging: "500g x 20pkt", itemCode: "40648" },
            { type: "PKT", name: "彩虹鱼饼 FISH CAKE", packaging: "500g/pkt", itemCode: "40649" }
        ],
        scanned: false
    },
    {
        barcode: "50264",
        name: "VEGETABLE FISH BALL",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "VEGETABLE FISH BALL", packaging: "500g x 20pkt", itemCode: "50264" },
            { type: "PKT", name: "VEGETABLE FISH BALL", packaging: "500g/pkt", itemCode: "50265" }
        ],
        scanned: false
    },
    {
        barcode: "50266",
        name: "PANDY FISH",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "PANDY FISH", packaging: "500g x 20pkt", itemCode: "50266" },
            { type: "PKT", name: "PANDY FISH", packaging: "500g/pkt", itemCode: "50267" }
        ],
        scanned: false
    },
    {
        barcode: "50268",
        name: "CARTOON FISH",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "CARTOON FISH", packaging: "500g x 20pkt", itemCode: "50268" },
            { type: "PKT", name: "CARTOON FISH", packaging: "500g/pkt", itemCode: "50269" }
        ],
        scanned: false
    },
    {
        barcode: "50270",
        name: "FRUITY FISH CAKE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "FRUITY FISH CAKE", packaging: "500g x 20pkt", itemCode: "50270" },
            { type: "PKT", name: "FRUITY FISH CAKE", packaging: "500g/pkt", itemCode: "50271" }
        ],
        scanned: false
    },
    {
        barcode: "50200",
        name: "虾蕾 SHRIMP BOMB",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "虾蕾 SHRIMP BOMB", packaging: "250g x 40pkt", itemCode: "50200" },
            { type: "TRAY", name: "虾蕾 SHRIMP BOMB", packaging: "250g/pkt", itemCode: "50201" }
        ],
        scanned: false
    },
    {
        barcode: "50702",
        name: "春卷 SPRING ROLL",
        packaging: "8pkts x 10's",
        skus: [
            { type: "CTN", name: "春卷 SPRING ROLL", packaging: "8pkts x 10's", itemCode: "50702" },
            { type: "PKT", name: "春卷 SPRING ROLL", packaging: "10's/pkt", itemCode: "50703" }
        ],
        scanned: false
    },
    {
        barcode: "61006",
        name: "(E)四色卷 FOUR COLOUR ROLL",
        packaging: "5's x 15pkt",
        skus: [
            { type: "CTN", name: "(E)四色卷 FOUR COLOUR ROLL", packaging: "5's x 15pkt", itemCode: "61006" },
            { type: "PKT", name: "(E)四色卷 FOUR COLOUR ROLL", packaging: "5's/pkt", itemCode: "62006" }
        ],
        scanned: false
    },
    {
        barcode: "10903",
        name: "苏东丸 CUTTLEFISH BALL",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "苏东丸 CUTTLEFISH BALL", packaging: "1kg x 10pkt", itemCode: "NA1" },
            { type: "PKT", name: "苏东丸 CUTTLEFISH BALL", packaging: "1kg/pkt", itemCode: "10903" }
        ],
        scanned: false
    },
    {
        barcode: "25000",
        name: "海鲜条 SEAFOOD STICK",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "海鲜条 SEAFOOD STICK", packaging: "250g x 40pkt", itemCode: "25000" },
            { type: "PKT", name: "海鲜条 SEAFOOD STICK", packaging: "250g/pkt", itemCode: "25001" }
        ],
        scanned: false
    },
    {
        barcode: "30100",
        name: "干贝 SURIMI SCALLOP",
        packaging: "50's x 10pkt",
        skus: [
            { type: "CTN", name: "干贝 SURIMI SCALLOP", packaging: "50's x 10pkt", itemCode: "30100" },
            { type: "PKT", name: "干贝 SURIMI SCALLOP", packaging: "50's/pkt", itemCode: "30101" }
        ],
        scanned: false
    },
    {
        barcode: "40628",
        name: "蟹味柳 KANIMI CHUNK",
        packaging: "180g x 20pkt",
        skus: [
            { type: "CTN", name: "蟹味柳 KANIMI CHUNK", packaging: "180g x 20pkt", itemCode: "40628" },
            { type: "PKT", name: "蟹味柳 KANIMI CHUNK", packaging: "180g/pkt", itemCode: "40629" }
        ],
        scanned: false
    },
    {
        barcode: "25010",
        name: "人造蟹条 FLAVOURED CRAB STICKS",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "人造蟹条 FLAVOURED CRAB STICKS", packaging: "250g x 40pkt", itemCode: "25010" },
            { type: "PKT", name: "人造蟹条 FLAVOURED CRAB STICKS", packaging: "250g/pkt", itemCode: "25011" }
        ],
        scanned: false
    },
    {
        barcode: "40600",
        name: "人造蟹钳 IMITATION CRAB CLAW",
        packaging: "250g x 30pkt",
        skus: [
            { type: "CTN", name: "人造蟹钳 IMITATION CRAB CLAW", packaging: "250g x 30pkt", itemCode: "40600" },
            { type: "TRAY", name: "人造蟹钳 IMITATION CRAB CLAW", packaging: "250g/pkt", itemCode: "40601" }
        ],
        scanned: false
    },
    {
        barcode: "50101",
        name: "(奥)蟹柳 CRAB NUGGET",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)蟹柳 CRAB NUGGET", packaging: "1kg/pkt", itemCode: "50101" }
        ],
        scanned: false
    },
    {
        barcode: "50111",
        name: "(奥)鱼蛋卷 FISH CRAB ROLL",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)鱼蛋卷 FISH CRAB ROLL", packaging: "1kg/pkt", itemCode: "50111" }
        ],
        scanned: false
    },
{
        barcode: "50131",
        name: "(奥)富贵鱼 GOLDENFISH SOLO",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)富贵鱼 GOLDENFISH SOLO", packaging: "1kg/pkt", itemCode: "50131" }
        ],
        scanned: false
    },
    {
        barcode: "50141",
        name: "(奥)三文鱼 SALMON FISH",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)三文鱼 SALMON FISH", packaging: "1kg/pkt", itemCode: "50141" }
        ],
        scanned: false
    },
    {
        barcode: "50151",
        name: "(奥)三文治豆腐 SANDWICH TOFU",
        packaging: "1kg/pkt",
        skus: [
            { type: "KG", name: "(奥)三文治豆腐 SANDWICH TOFU", packaging: "1kg/pkt", itemCode: "50151" }
        ],
        scanned: false
    },
    {
        barcode: "50161",
        name: "(奥)半圆海鲜豆腐 SEAFOOD TOFU",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)半圆海鲜豆腐 SEAFOOD TOFU", packaging: "1kg/pkt", itemCode: "50161" }
        ],
        scanned: false
    },
    {
        barcode: "10900",
        name: "苏东丸 CUTTLEFISH BALL",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "苏东丸 CUTTLEFISH BALL", packaging: "500g x 20pkt", itemCode: "10900" },
            { type: "PKT", name: "苏东丸 CUTTLEFISH BALL", packaging: "500g/pkt", itemCode: "10901" }
        ],
        scanned: false
    },
    {
        barcode: "24000",
        name: "香菇丸 MUSHROOM BALL",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "香菇丸 MUSHROOM BALL", packaging: "1kg x 10pkt", itemCode: "24000" },
            { type: "KG", name: "香菇丸 MUSHROOM BALL", packaging: "1kg/pkt", itemCode: "24001" }
        ],
        scanned: false
    },
    {
        barcode: "24020",
        name: "香菇丸 MUSHROOM BALL (17g)",
        packaging: "200g x 40pkt",
        skus: [
            { type: "CTN", name: "香菇丸 MUSHROOM BALL (17g)", packaging: "200g x 40pkt", itemCode: "24020" },
            { type: "PKT", name: "香菇丸 MUSHROOM BALL (17g)", packaging: "200g/pkt", itemCode: "24021" }
        ],
        scanned: false
    },
    {
        barcode: "40670",
        name: "海贝 IMITATION SCALLOP",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "海贝 IMITATION SCALLOP", packaging: "250g x 40pkt", itemCode: "40670" },
            { type: "PKT", name: "海贝 IMITATION SCALLOP", packaging: "250g/pkt", itemCode: "40671" }
        ],
        scanned: false
    },
    {
        barcode: "40650",
        name: "虾仁卷 SHRIMP ROLL",
        packaging: "320g x 28pkt",
        skus: [
            { type: "CTN", name: "虾仁卷 SHRIMP ROLL", packaging: "320g x 28pkt", itemCode: "40650" },
            { type: "TRAY", name: "虾仁卷 SHRIMP ROLL", packaging: "320g/pkt", itemCode: "40651" }
        ],
        scanned: false
    },
    {
        barcode: "40503",
        name: "豆香鱼片 SOY FISH PILLOW",
        packaging: "500g x 15pkt",
        skus: [
            { type: "CTN", name: "豆香鱼片 SOY FISH PILLOW", packaging: "500g x 15pkt", itemCode: "40503" },
            { type: "PKT", name: "豆香鱼片 SOY FISH PILLOW", packaging: "500g/pkt", itemCode: "40504" }
        ],
        scanned: false
    },
   {
        barcode: "28040",
        name: "爱心豆腐 CHEESY LOVE",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "爱心豆腐 CHEESY LOVE", packaging: "1kg x 10pkt", itemCode: "28040" },
            { type: "KG", name: "爱心豆腐 CHEESY LOVE", packaging: "1kg/pkt", itemCode: "28041" }
        ],
        scanned: false
    },
    {
        barcode: "28004",
        name: "甜心鱼豆腐 Sweet Heart Fish Tofu",
        packaging: "50's x 12pkt",
        skus: [
            { type: "CTN", name: "甜心鱼豆腐 Sweet Heart Fish Tofu", packaging: "50's x 12pkt", itemCode: "28004" },
            { type: "PKT", name: "甜心鱼豆腐 Sweet Heart Fish Tofu", packaging: "50's", itemCode: "28005" }
        ],
        scanned: false
    },
    {
        barcode: "50360",
        name: "热狗 CHICKEN FRANKS",
        packaging: "340g x 28pkt",
        skus: [
            { type: "CTN", name: "热狗 CHICKEN FRANKS", packaging: "340g x 28pkt", itemCode: "50360" },
            { type: "PKT", name: "热狗 CHICKEN FRANKS", packaging: "340g/pkt", itemCode: "50361" }
        ],
        scanned: false
    },
    {
        barcode: "40676",
        name: "炸豆皮卷 FRIED BEAN CURD ROLL",
        packaging: "825g x 8pkt",
        skus: [
            { type: "CTN", name: "炸豆皮卷 FRIED BEAN CURD ROLL", packaging: "825g x 8pkt", itemCode: "40676" },
            { type: "PKT", name: "炸豆皮卷 FRIED BEAN CURD ROLL", packaging: "825g/pkt", itemCode: "40677" }
        ],
        scanned: false
    },
    {
        barcode: "40634",
        name: "芝士丸 Melted Cheese Meat BALL",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "芝士丸 Melted Cheese Meat BALL", packaging: "500g x 20pkt", itemCode: "40634" },
            { type: "PKT", name: "芝士丸 Melted Cheese Meat BALL", packaging: "500g/pkt", itemCode: "40635" }
        ],
        scanned: false
    },
    {
        barcode: "40636",
        name: "芝士丸 MELTED CHEESE BALL",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "芝士丸 MELTED CHEESE BALL", packaging: "1kg x 10pkt", itemCode: "40636" },
            { type: "PKT", name: "芝士丸 MELTED CHEESE BALL", packaging: "1kg/pkt", itemCode: "40637" }
        ],
        scanned: false
    },
    {
        barcode: "28042",
        name: "芝士鱼豆腐 CHEESE FISH TOFU",
        packaging: "200g x 40pkt",
        skus: [
            { type: "CTN", name: "芝士鱼豆腐 CHEESE FISH TOFU", packaging: "200g x 40pkt", itemCode: "28042" },
            { type: "PKT", name: "芝士鱼豆腐 CHEESE FISH TOFU", packaging: "200g/pkt", itemCode: "28043" }
        ],
        scanned: false
    },
    {
        barcode: "29000",
        name: "鱼蛋卷 FISH EGG ROLL",
        packaging: "200g x 40pkt",
        skus: [
            { type: "CTN", name: "鱼蛋卷 FISH EGG ROLL", packaging: "200g x 40pkt", itemCode: "29000" },
            { type: "PKT", name: "鱼蛋卷 FISH EGG ROLL", packaging: "200g/ pkt", itemCode: "29001" }
        ],
        scanned: false
    },
    {
        barcode: "20301",
        name: "火锅拼盘 HOT POT COMBO",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "火锅拼盘 HOT POT COMBO", packaging: "500g x 20pkt", itemCode: "20301" },
            { type: "PKT", name: "火锅拼盘 HOT POT COMBO", packaging: "500g/pkt", itemCode: "20302" }
        ],
        scanned: false
    },
    {
        barcode: "26000",
        name: "蟹丸 FLAVOURED CRAB BALL",
        packaging: "50's x 10pkt",
        skus: [
            { type: "CTN", name: "蟹丸 FLAVOURED CRAB BALL", packaging: "50's x 10pkt", itemCode: "26000" },
            { type: "PKT", name: "蟹丸 FLAVOURED CRAB BALL", packaging: "50's/pkt", itemCode: "26001" }
        ],
        scanned: false
    },
    {
        barcode: "40678",
        name: "海鲜粒 SEAFOOD BALL",
        packaging: "50's x 8pkt",
        skus: [
            { type: "CTN", name: "海鲜粒 SEAFOOD BALL", packaging: "50's x 8pkt", itemCode: "40678" },
            { type: "PKT", name: "海鲜粒 SEAFOOD BALL", packaging: "50's/pkt", itemCode: "40679" }
        ],
        scanned: false
    },
    {
        barcode: "40662",
        name: "人造蟹粒 IMITATION CRAB BITE",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "人造蟹粒 IMITATION CRAB BITE", packaging: "1kg x 10pkt", itemCode: "40662" },
            { type: "PKT", name: "人造蟹粒 IMITATION CRAB BITE", packaging: "1kg/pkt", itemCode: "40663" }
        ],
        scanned: false
    },
    {
        barcode: "26010",
        name: "蟹丸 FLAVOURED CRAB BALL",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "蟹丸 FLAVOURED CRAB BALL", packaging: "250g x 40pkt", itemCode: "26010" },
            { type: "PKT", name: "蟹丸 FLAVOURED CRAB BALL", packaging: "250g/pkt", itemCode: "26011" }
        ],
        scanned: false
    },
    {
        barcode: "26110",
        name: "皇帝蟹丸 FLAVOURED KING CRAB BALL",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "皇帝蟹丸 FLAVOURED KING CRAB BALL", packaging: "250g x 40pkt", itemCode: "26110" },
            { type: "PKT", name: "皇帝蟹丸 FLAVOURED KING CRAB BALL", packaging: "250g/pkt", itemCode: "26111" }
        ],
        scanned: false
    },
    {
        barcode: "26100",
        name: "皇帝蟹丸 FLAVOURED KING CRAB BALL",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "皇帝蟹丸 FLAVOURED KING CRAB BALL", packaging: "500g x 20pkt", itemCode: "26100" },
            { type: "PKT", name: "皇帝蟹丸 FLAVOURED KING CRAB BALL", packaging: "500g/pkt", itemCode: "26101" }
        ],
        scanned: false
    },
    {
        barcode: "40300",
        name: "大鱼丸 COOKED FISH BALL",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "大鱼丸 COOKED FISH BALL", packaging: "1kg x 10pkt", itemCode: "40300" },
            { type: "PKT", name: "Fish Ball L", packaging: "1kg", itemCode: "NA2" }
        ],
        scanned: false
    },
    {
        barcode: "40310",
        name: "中鱼丸 COOKED FISH BALL (M)",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "中鱼丸 COOKED FISH BALL (M)", packaging: "1kg x 10pkt", itemCode: "40310" },
            { type: "PKT", name: "Fish Ball M", packaging: "1kg", itemCode: "NA3" }
        ],
        scanned: false
    },
    {
        barcode: "30200",
        name: "金带子 BREADED SURIMI SCALLOP",
        packaging: "160g x 20pkts",
        skus: [
            { type: "CTN", name: "金带子 BREADED SURIMI SCALLOP", packaging: "160g x 20pkts", itemCode: "30200" },
            { type: "TRAY", name: "金带子 BREADED SURIMI SCALLOP", packaging: "160g/tray", itemCode: "30210" }
        ],
        scanned: false
    },
    {
        barcode: "10603",
        name: "竹轮 CHIKUWA",
        packaging: "1kg x 8pkt",
        skus: [
            { type: "CTN", name: "竹轮 CHIKUWA", packaging: "1kg x 8pkt", itemCode: "10603" },
            { type: "KG", name: "竹轮 CHIKUWA", packaging: "1kg/pkt", itemCode: "10601" }
        ],
        scanned: false
    },
    {
        barcode: "10604",
        name: "竹轮 CHIKUWA",
        packaging: "200g x 40pkt",
        skus: [
            { type: "CTN", name: "竹轮 CHIKUWA", packaging: "200g x 40pkt", itemCode: "10604" },
            { type: "PKT", name: "竹轮 CHIKUWA", packaging: "200g/pkt", itemCode: "10605" }
        ],
        scanned: false
    },
 {
        barcode: "40693",
        name: "泰式鱼饼 THAI FISH CAKE",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "泰式鱼饼 THAI FISH CAKE", packaging: "1kg x 10pkt", itemCode: "40693" },
            { type: "PKT", name: "泰式鱼饼 THAI FISH CAKE", packaging: "1kg/pkt", itemCode: "40694" }
        ],
        scanned: false
    },
    {
        barcode: "28010",
        name: "鱼豆腐 FISH TOFU",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "鱼豆腐 FISH TOFU", packaging: "250g x 40pkt", itemCode: "28010" },
            { type: "PKT", name: "鱼豆腐 FISH TOFU", packaging: "250g/pkt", itemCode: "28011" }
        ],
        scanned: false
    },
    {
        barcode: "28020",
        name: "鱼豆腐 FISH TOFU",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "鱼豆腐 FISH TOFU", packaging: "1kg x 10pkt", itemCode: "28020" },
            { type: "PKT", name: "鱼豆腐 FISH TOFU", packaging: "1kg/pkt", itemCode: "28021" }
        ],
        scanned: false
    },
    {
        barcode: "40668",
        name: "海鲜粒 SEAFOOD BALL",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "海鲜粒 SEAFOOD BALL", packaging: "500g x 20pkt", itemCode: "40668" },
            { type: "PKT", name: "海鲜粒 SEAFOOD BALL", packaging: "500g/pkt", itemCode: "40669" }
        ],
        scanned: false
    },
    {
        barcode: "40690",
        name: "蟹味鱼饼 FLAVOURED CRAB MEAT CAKE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "蟹味鱼饼 FLAVOURED CRAB MEAT CAKE", packaging: "500g x 20pkt", itemCode: "40690" },
            { type: "PKT", name: "蟹味鱼饼 FLAVOURED CRAB MEAT CAKE", packaging: "500g/pkt", itemCode: "40691" }
        ],
        scanned: false
    },
    {
        barcode: "28023",
        name: "鱼芙 FISH PUFFY",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "鱼芙 FISH PUFFY", packaging: "500g x 20pkt", itemCode: "28023" },
            { type: "PKT", name: "鱼芙 FISH PUFFY", packaging: "500g/pkt", itemCode: "28024" }
        ],
        scanned: false
    },
    {
        barcode: "40666",
        name: "海鲜卷 SEAFOOD ROLL",
        packaging: "750g x 14pkt",
        skus: [
            { type: "CTN", name: "海鲜卷 SEAFOOD ROLL", packaging: "750g x 14pkt", itemCode: "40666" },
            { type: "PKT", name: "海鲜卷 SEAFOOD ROLL", packaging: "750g/pkt", itemCode: "40667" }
        ],
        scanned: false
    },
    {
        barcode: "28034",
        name: "(菜) 海鲜豆腐 SEAFOOD TOFU WITH VEGETABLE",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "(菜) 海鲜豆腐 SEAFOOD TOFU WITH VEGETABLE", packaging: "1kg x 10pkt", itemCode: "28034" },
            { type: "PKT", name: "(菜) 海鲜豆腐 SEAFOOD TOFU WITH VEGETABLE", packaging: "1kg/pkt", itemCode: "28035" }
        ],
        scanned: false
    }
];
let currentProduct = null;
let scanRecords = [];

// 初始化
window.onload = function() {
    renderProducts();
    updateProgress();
    document.getElementById('barcodeInput').focus();
}

// 渲染产品列表
function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    
    const unscannedProducts = products.filter(p => !p.scanned);
    unscannedProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.onclick = () => showQuantityModal(product);
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.packaging}</p>
        `;
        productList.appendChild(div);
    });
}

// 搜索产品
function searchProduct() {
    const barcode = document.getElementById('barcodeInput').value.trim();
    if (!barcode) return;

    const product = products.find(p => p.barcode === barcode);

    if (product && !product.scanned) {
        showQuantityModal(product);
    } else if (product && product.scanned) {
        alert('此产品已经盘点过了！');
    } else {
        alert('未找到产品！');
    }

    document.getElementById('barcodeInput').value = '';
}

// 显示数量输入模态框
function showQuantityModal(product) {
    currentProduct = product;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalPackaging').textContent = product.packaging;
    
    // Check if product has box quantity
    const hasBoxQuantity = product.skus.some(sku => sku.type === "CTN");
    
    const boxQuantityInput = document.getElementById('boxQuantityInput');
    const boxQuantityLabel = boxQuantityInput.previousElementSibling;
    
    if (!hasBoxQuantity) {
        boxQuantityInput.style.display = 'none';
        boxQuantityLabel.style.display = 'none';
    } else {
        boxQuantityInput.style.display = 'block';
        boxQuantityLabel.style.display = 'block';
    }
    
    document.getElementById('boxQuantityInput').value = '';
    document.getElementById('pieceQuantityInput').value = '';
    document.getElementById('quantityModal').style.display = 'block';
    
    // Focus on appropriate input based on product type
    if (hasBoxQuantity) {
        document.getElementById('boxQuantityInput').focus();
    } else {
        document.getElementById('pieceQuantityInput').focus();
    }
}
// 关闭模态框
function closeModal() {
    document.getElementById('quantityModal').style.display = 'none';
    document.getElementById('barcodeInput').focus();
}

// 提交数量
function submitQuantity() {
    const boxQuantity = parseInt(document.getElementById('boxQuantityInput').value) || 0;
    const pieceQuantity = parseInt(document.getElementById('pieceQuantityInput').value) || 0;

    if (boxQuantity === 0 && pieceQuantity === 0) {
        alert('请至少输入一个数量！');
        return;
    }

    currentProduct.scanned = true;

    // Store timestamp as string immediately when creating record
    const currentTime = new Date().toLocaleString();
    
    const record = {
        timestamp: currentTime,
        items: [{
            name: currentProduct.name,
            packaging: currentProduct.packaging,
            boxQuantity: boxQuantity,
            pieceQuantity: pieceQuantity,
            timestamp: currentTime
        }]
    };

    scanRecords.unshift(record);

    renderRecords();
    renderProducts();
    updateProgress();
    closeModal();
}

// 检查两个时间戳是否在同一分钟内
function isSameMinute(date1, date2) {
    return Math.abs(date1 - date2) < 60000; // 60000毫秒 = 1分钟
}

// 更新进度条
function updateProgress() {
    const total = products.length;
    const scanned = products.filter(p => p.scanned).length;
    const percentage = (scanned / total) * 100;
    
    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${scanned}/${total} 完成`;
}

// 渲染盘点记录
function renderRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '';

    scanRecords.forEach(record => {
        const div = document.createElement('div');
        div.className = 'record-group';
        
        let recordsHtml = `<div class="record-time">${record.timestamp}</div>`;
        
        record.items.forEach(item => {
            recordsHtml += `
                <div class="record-item">
                    <h3>${item.name}</h3>
                    <p>${item.packaging}</p>
                    <p>数量: ${item.boxQuantity}箱 ${item.pieceQuantity}件</p>
                </div>
            `;
        });

        div.innerHTML = recordsHtml;
        recordsList.appendChild(div);
    });
}
// 显示指定页面
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`${pageName}Page`).classList.add('active');
    
    if (pageName === 'scan') {
        document.getElementById('barcodeInput').focus();
    }
}

// 支持回车键搜索
document.getElementById('barcodeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProduct();
    }
});

// 支持回车键在数量输入框之间切换和提交
document.getElementById('boxQuantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('pieceQuantityInput').focus();
    }
});

document.getElementById('pieceQuantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitQuantity();
    }
});

async function submitToGoogleSheet() {
    const counter = document.getElementById('counterSelect').value;
    
    if (!counter) {
        alert('请选择盘点人员！');
        return;
    }
    
    if (scanRecords.length === 0) {
        alert('没有可提交的记录！');
        return;
    }

    // Show loading overlay
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'block';

    try {
        const data = scanRecords.flatMap(record => 
            record.items.map(item => ({
                timestamp: item.timestamp.toLocaleString(),
                name: item.name,
                packaging: item.packaging,
                boxQuantity: item.boxQuantity,
                pieceQuantity: item.pieceQuantity,
                counter: counter
            }))
        );

        const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('数据提交成功！');
            // Clear records after successful submission
            scanRecords = [];
            renderRecords();
        } else {
            throw new Error('提交失败');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('提交失败，请重试！');
    } finally {
        // Hide loading overlay
        loadingOverlay.style.display = 'none';
    }
}
