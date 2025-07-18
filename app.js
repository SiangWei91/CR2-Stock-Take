// 示例产品数据
const products = [
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
        barcode: "40665",
        name: "SP 海鲜卷 SEAFOOD ROLL",
        packaging: "750g x 14pkt",
        skus: [
            { type: "CTN", name: "SP 海鲜卷 SEAFOOD ROLL", packaging: "750g x 14pkt", itemCode: "40665" },
            { type: "PKT", name: "SP 海鲜卷 SEAFOOD ROLL", packaging: "750g", itemCode: "40665.1" }
        ],
        scanned: false
    },
    {
        barcode: "50266",
        name: "熊猫鱼饼 PANDY FISH",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "熊猫鱼饼 PANDY FISH", packaging: "500g x 20pkt", itemCode: "50266" },
            { type: "PKT", name: "熊猫鱼饼 PANDY FISH", packaging: "500g/pkt", itemCode: "50267" }
        ],
        scanned: false
    },
    {
        barcode: "50268",
        name: "可爱鱼 CARTOON FISH",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "CARTOON FISH", packaging: "500g x 20pkt", itemCode: "50268" },
            { type: "PKT", name: "CARTOON FISH", packaging: "500g/pkt", itemCode: "50269" }
        ],
        scanned: false
    },
    {
        barcode: "50270",
        name: "果香鱼饼 FRUITY FISH CAKE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "FRUITY FISH CAKE", packaging: "500g x 20pkt", itemCode: "50270" },
            { type: "PKT", name: "FRUITY FISH CAKE", packaging: "500g/pkt", itemCode: "50271" }
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
        barcode: "NA1",
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
            { type: "PKT", name: "人造蟹钳 IMITATION CRAB CLAW", packaging: "250g/pkt", itemCode: "40601" }
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
            { type: "PKT", name: "(奥)三文治豆腐 SANDWICH TOFU", packaging: "1kg/pkt", itemCode: "50151" }
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
        name: "苏东丸 CUTTLEFISH BALL 500g",
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
            { type: "PKT", name: "香菇丸 MUSHROOM BALL", packaging: "1kg/pkt", itemCode: "24001" }
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
            { type: "PKT", name: "虾仁卷 SHRIMP ROLL", packaging: "320g/pkt", itemCode: "40651" }
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
            { type: "PKT", name: "爱心豆腐 CHEESY LOVE", packaging: "1kg/pkt", itemCode: "28041" }
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
        name: "蟹丸 FLAVOURED CRAB BALL 250g",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "蟹丸 FLAVOURED CRAB BALL", packaging: "250g x 40pkt", itemCode: "26010" },
            { type: "PKT", name: "蟹丸 FLAVOURED CRAB BALL", packaging: "250g/pkt", itemCode: "26011" }
        ],
        scanned: false
    },
    {
        barcode: "26110",
        name: "皇帝蟹丸 FLAVOURED KING CRAB BALL 250g",
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
        barcode: "90003.1",
        name: "NTUC鱼丸 28G NTUC FISH BALL 28G",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "NTUC鱼丸 28G NTUC FISH BALL 28G", packaging: "1kg x 10pkt", itemCode: "90003.1" },
            { type: "PKT", name: "NTUC鱼丸 28G NTUC FISH BALL 28G", packaging: "1kg", itemCode: "NA2" }
        ],
        scanned: false
    },
    {
        barcode: "40310",
        name: "中鱼丸 COOKED FISH BALL (M)",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "中鱼丸 COOKED FISH BALL (M)", packaging: "1kg x 10pkt", itemCode: "40310" },
            { type: "PKT", name: "中鱼丸 Fish Ball M", packaging: "1kg", itemCode: "NA3" }
        ],
        scanned: false
    },
    {
        barcode: "30200",
        name: "金带子 BREADED SURIMI SCALLOP",
        packaging: "160g x 20pkts",
        skus: [
            { type: "CTN", name: "金带子 BREADED SURIMI SCALLOP", packaging: "160g x 20pkts", itemCode: "30200" },
            { type: "PKT", name: "金带子 BREADED SURIMI SCALLOP", packaging: "160g/tray", itemCode: "30210" }
        ],
        scanned: false
    },
    {
        barcode: "10603",
        name: "竹轮 CHIKUWA 1kg",
        packaging: "1kg x 8pkt",
        skus: [
            { type: "CTN", name: "竹轮 CHIKUWA", packaging: "1kg x 8pkt", itemCode: "10603" },
            { type: "PKT", name: "竹轮 CHIKUWA", packaging: "1kg/pkt", itemCode: "10601" }
        ],
        scanned: false
    },
    {
        barcode: "10604",
        name: "竹轮 CHIKUWA 200g",
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
        name: "鱼豆腐 FISH TOFU 250g",
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
        name: "海鲜粒 SEAFOOD BALL 500g",
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
    },
{
        barcode: "26114",
        name: "芝士皇帝蟹味丸 CHEESE FLAVOURED KING CRAB BALLL",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "芝士皇帝蟹味丸 CHEESE FLAVOURED KING CRAB BALLL", packaging: "250g x 40pkt", itemCode: "26114" },
            { type: "PKT", name: "芝士皇帝蟹味丸 CHEESE FLAVOURED KING CRAB BALLL", packaging: "250g/pkt", itemCode: "26115" }
        ],
        scanned: false
    },
{
        barcode: "28032",
        name: "顶级芝士鱼豆腐 PREMIUM CHEESE FISH TOFU",
        packaging: "200g x 25 pkt",
        skus: [
            { type: "CTN", name: "顶级芝士鱼豆腐 PREMIUM CHEESE FISH TOFU", packaging: "200g x 25pkt", itemCode: "28032" },
            { type: "PKT", name: "顶级芝士鱼豆腐 PREMIUM CHEESE FISH TOFU", packaging: "200g/pkt", itemCode: "28033" }
        ],
        scanned: false
    },
{
        barcode: "28002",
        name: "鱼豆腐(500g) FISH TOFU",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "鱼豆腐(500g) FISH TOFU", packaging: "500g x 20pkt", itemCode: "28002" },
            { type: "PKT", name: "鱼豆腐(500g) FISH TOFU", packaging: "500g/pkt", itemCode: "28009" }
        ],
        scanned: false
    },
{
        barcode: "26112",
        name: "皇帝蟹粒 FLAVOURED KING CRAB BITE",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "皇帝蟹粒 FLAVOURED KING CRAB BITE", packaging: "250g x 40pkt", itemCode: "26112" },
            { type: "PKT", name: "皇帝蟹粒 FLAVOURED KING CRAB BITE", packaging: "250g/pkt", itemCode: "26113" }
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
    populateUserDropdown(); // Add this line to populate the dropdown
}
function createCustomAlert() {
    // Create the styles
    const style = document.createElement('style');
    style.textContent = `
        .custom-alert {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 3000;
            animation: fadeIn 0.3s ease;
        }

        .custom-alert-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 300px;
            text-align: center;
            animation: slideIn 0.3s ease;
        }

        .alert-button {
            margin-top: 15px;
            padding: 8px 20px;
            background: #64748b;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideIn {
            from { 
                opacity: 0;
                transform: translate(-50%, -60%);
            }
            to { 
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
    `;
    document.head.appendChild(style);

    // Create the alert elements
    const alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert';
    alertDiv.id = 'customAlert';
    
    alertDiv.innerHTML = `
        <div class="custom-alert-content">
            <p id="alertMessage"></p>
            <button onclick="closeCustomAlert()" class="alert-button">确定 Confirm</button>
        </div>
    `;

    // Add click handler for closing when clicking outside
    alertDiv.addEventListener('click', function(e) {
        if (e.target === alertDiv) {
            closeCustomAlert();
        }
    });

    document.body.appendChild(alertDiv);
}

// Function to show custom alert
function showCustomAlert(message) {
    // Create alert elements if they don't exist
    if (!document.getElementById('customAlert')) {
        createCustomAlert();
    }
    
    const alertEl = document.getElementById('customAlert');
    const messageEl = document.getElementById('alertMessage');
    messageEl.textContent = message;
    alertEl.style.display = 'block';
    
    // Focus the OK button
    const button = alertEl.querySelector('button');
    if (button) button.focus();
}

// Function to close custom alert
function closeCustomAlert() {
    const alertEl = document.getElementById('customAlert');
    if (alertEl) {
        alertEl.style.display = 'none';
        
        // Restore focus to barcode input if on scan page
        if (document.getElementById('scanPage').classList.contains('active')) {
            document.getElementById('barcodeInput').focus();
        }
    }
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
// Search product function - now includes delay handling
let searchTimeout;
function searchProduct() {
    const barcode = document.getElementById('barcodeInput').value.trim();
    if (!barcode) return;

    const product = products.find(p => p.barcode === barcode);

    if (product && !product.scanned) {
        showQuantityModal(product);
    } else if (product && product.scanned) {
        showCustomAlert('此产品已经盘点过了！This product has already been counted!');
    } else {
        showCustomAlert('未找到产品！No product found!');
    }

    document.getElementById('barcodeInput').value = '';
}
// Initialize
window.onload = function() {
    renderProducts();
    updateProgress();
    setupBarcodeInput();
}

// New function to setup barcode input with auto-trigger
function setupBarcodeInput() {
    const barcodeInput = document.getElementById('barcodeInput');
    
    // Focus the input when page loads
    barcodeInput.focus();
    
    // Add input event listener for auto-triggering
    barcodeInput.addEventListener('input', function(e) {
        // Clear any existing timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        
        // Get the current input value
        const barcode = e.target.value.trim();
        
        // If the barcode is long enough (you can adjust this length)
        if (barcode.length >= 3) {  // Assuming minimum barcode length is 5
            // Set a small timeout to allow for complete barcode scan
            searchTimeout = setTimeout(() => {
                searchProduct();
            }, 300);  // 300ms delay, adjust as needed
        }
    });

    // Keep the Enter key functionality as backup
    barcodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
            searchProduct();
        }
    });
}
// 显示数量输入模态框
function showQuantityModal(product) {
    currentProduct = product;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalPackaging').textContent = product.packaging;
    
    // Check product SKU types
    const hasCTN = product.skus.some(sku => sku.type === "CTN");
    const hasPKT = product.skus.some(sku => sku.type === "PKT");
    
    const boxQuantityInput = document.getElementById('boxQuantityInput');
    const boxQuantityLabel = boxQuantityInput.previousElementSibling;
    const pieceQuantityInput = document.getElementById('pieceQuantityInput');
    const pieceQuantityLabel = pieceQuantityInput.previousElementSibling;
    
    // Show/hide inputs based on SKU types
    if (hasCTN && !hasPKT) {
        // Only show CTN input
        boxQuantityInput.style.display = 'block';
        boxQuantityLabel.style.display = 'block';
        pieceQuantityInput.style.display = 'none';
        pieceQuantityLabel.style.display = 'none';
    } else if (!hasCTN && hasPKT) {
        // Only show PKT input
        boxQuantityInput.style.display = 'none';
        boxQuantityLabel.style.display = 'none';
        pieceQuantityInput.style.display = 'block';
        pieceQuantityLabel.style.display = 'block';
    } else if (hasCTN && hasPKT) {
        // Show both inputs
        boxQuantityInput.style.display = 'block';
        boxQuantityLabel.style.display = 'block';
        pieceQuantityInput.style.display = 'block';
        pieceQuantityLabel.style.display = 'block';
    }
    
    // Clear inputs
    boxQuantityInput.value = '';
    pieceQuantityInput.value = '';
    
    // Show modal
    document.getElementById('quantityModal').style.display = 'block';
    
    // Set focus after a short delay to ensure the modal is fully displayed
    setTimeout(() => {
        if (hasCTN && !hasPKT) {
            boxQuantityInput.focus();
        } else if (!hasCTN && hasPKT) {
            pieceQuantityInput.focus();
        } else if (hasCTN && hasPKT) {
            boxQuantityInput.focus();
        }
    }, 100); // Small delay to ensure modal is rendered
}

function closeModal() {
    document.getElementById('quantityModal').style.display = 'none';
    document.getElementById('barcodeInput').focus();
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
    document.getElementById('progressText').textContent = `${scanned}/${total} 完成度 | Progress`;
}

// 渲染盘点记录
function formatDateToDDMMYYYY(dateString) {
    // First, split the dateString into date and time parts
    const [datePart, timePart] = dateString.split(' ');
    
    // If the date is already in DD/MM/YYYY format, return as is
    if (datePart.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        return dateString;
    }
    
    // Otherwise, parse the date and convert
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
        console.error('Invalid date:', dateString);
        return 'Invalid Date';
    }
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const time = timePart || date.toLocaleTimeString('en-GB', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    return `${day}/${month}/${year} ${time}`;
}

// Convert date format for Google Sheets submission
function convertDateFormat(dateStr) {
    // Already in DD/MM/YYYY format, return as is
    return dateStr;
}

// Updated renderRecords function
function renderRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '';
    scanRecords.forEach((record, recordIndex) => {
        const div = document.createElement('div');
        div.className = 'record-group';
        
        // Format the timestamp using the new utility function
        const formattedTime = formatDateToDDMMYYYY(record.timestamp);
        let recordsHtml = `<div class="record-time">${formattedTime}</div>`;
        
        record.items.forEach((item, itemIndex) => {
            recordsHtml += `
                <div class="record-item" data-record="${recordIndex}" data-item="${itemIndex}">
                    <h3>${item.name}</h3>
                    <p>${item.packaging}</p>
                    <div class="records-quantity-group">
                        <div class="records-quantity-row">
                            <span class="records-quantity-label">箱 | CTN:</span>
                            <span class="records-quantity-value box-quantity"><strong>${item.boxQuantity}</strong></span>
                        </div>
                        <div class="records-quantity-row">
                            <span class="records-quantity-label">包 | PKT:</span>
                            <span class="records-quantity-value piece-quantity"><strong>${item.pieceQuantity}</strong></span>
                        </div>
                    </div>
                </div>
            `;
        });
        div.innerHTML = recordsHtml;
        
        // Make the div itself store the indices
        div.dataset.record = record.items[0] ? recordIndex : '';
        div.dataset.item = record.items[0] ? '0' : '';
        
        // Add double-click handler to the entire group
        div.addEventListener('dblclick', (event) => {
            // Prevent event from bubbling up
            event.stopPropagation();
            
            const recordIndex = div.dataset.record;
            const itemIndex = div.dataset.item;
            
            if (recordIndex !== '' && itemIndex !== '') {
                editRecordGroup(div, parseInt(recordIndex), parseInt(itemIndex));
            }
        });
        
        recordsList.appendChild(div);
    });
}

function editRecordGroup(groupElement, recordIndex, itemIndex) {
    // Check if already editing
    if (groupElement.classList.contains('editing')) {
        return;
    }
    
    // Add editing class for visual feedback
    groupElement.classList.add('editing');
    
    const record = scanRecords[recordIndex].items[itemIndex];
    const boxQuantitySpan = groupElement.querySelector('.box-quantity');
    const pieceQuantitySpan = groupElement.querySelector('.piece-quantity');
    
    // Create input for box quantity
    const boxInput = document.createElement('input');
    boxInput.type = 'number';
    boxInput.className = 'records-quantity-input';
    boxInput.value = record.boxQuantity;
    boxInput.min = '0';
    
    // Create input for piece quantity
    const pieceInput = document.createElement('input');
    pieceInput.type = 'number';
    pieceInput.className = 'records-quantity-input';
    pieceInput.value = record.pieceQuantity;
    pieceInput.min = '0';
    
    // Replace spans with inputs
    boxQuantitySpan.innerHTML = '';
    boxQuantitySpan.appendChild(boxInput);
    pieceQuantitySpan.innerHTML = '';
    pieceQuantitySpan.appendChild(pieceInput);
    
    // Focus first input
    boxInput.focus();
    
    function saveChanges() {
        if (!groupElement.classList.contains('editing')) {
            return; // Prevent double-saving
        }
        
        const newBoxQuantity = boxInput.value !== '' ? parseInt(boxInput.value) : 0;
        const newPieceQuantity = pieceInput.value !== '' ? parseInt(pieceInput.value) : 0;
        
        // Update data structure
        scanRecords[recordIndex].items[itemIndex].boxQuantity = newBoxQuantity;
        scanRecords[recordIndex].items[itemIndex].pieceQuantity = newPieceQuantity;
        
        // Update display
        boxQuantitySpan.innerHTML = `<strong>${newBoxQuantity}</strong>`;
        pieceQuantitySpan.innerHTML = `<strong>${newPieceQuantity}</strong>`;
        
        // Remove editing class
        groupElement.classList.remove('editing');
        
        // Remove click outside listener
        document.removeEventListener('click', handleClickOutside);
        
        // Show success message for local update
        showCustomAlert('记录已更新！Record Updated!');
    }
    
    // Handle input events
    boxInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            pieceInput.focus();
        }
    });
    
    pieceInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveChanges();
        }
    });
    
    // Save on blur of last input
    pieceInput.addEventListener('blur', () => {
        // Small timeout to allow for double-click to work properly
        setTimeout(saveChanges, 200);
    });
    
    // Handle clicks outside
    function handleClickOutside(e) {
        if (!groupElement.contains(e.target)) {
            saveChanges();
        }
    }
    
    // Add click outside listener after a small delay to prevent immediate triggering
    setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 100);
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

function checkInternetConnection() {
    return navigator.onLine;
}

// Function to save data to session storage
async function submitToGoogleSheet() {
    const counterSelect = document.getElementById('counterSelect');
    const counter = counterSelect.value; // This will be the name from the dropdown
    const LOCATION = 'CR2';
    
    if (!counter) {
        showCustomAlert('请选择盘点人员！Please choose the staff for inventory count!');
        return;
    }
    
    if (scanRecords.length === 0) {
        showCustomAlert('没有可提交的记录！There are no records to submit!');
        return;
    }

    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'block';

    try {
        function formatDateForGoogleSheets(dateStr) {
            const [datePart, timePart] = dateStr.split(' ');
            const [day, month, year] = datePart.split('/');
            return `${day}/${month}/${year}`;
        }

        const data = scanRecords.flatMap(record => 
            record.items.map(item => {
                const product = products.find(p => p.name === item.name);
                const ctnSku = product.skus.find(sku => sku.type === "CTN");
                const pktSku = product.skus.find(sku => sku.type === "PKT");
                
                const [date, time] = item.timestamp.split(' ');
                
                return {
                    sheetName: LOCATION,
                    date: formatDateForGoogleSheets(item.timestamp),
                    time: time,
                    name: item.name,
                    packaging: item.packaging,
                    boxQuantity: item.boxQuantity,
                    pieceQuantity: item.pieceQuantity,
                    ctnItemCode: ctnSku ? ctnSku.itemCode : '',
                    pktItemCode: pktSku ? pktSku.itemCode : '',
                    counter: counter // This now contains the name from the dropdown
                };
            })
        );

        if (!checkInternetConnection()) {
            saveToSessionStorage(data);
            showCustomAlert('无网络连接。数据已保存，将在有网络时自动提交。No network connection. Data has been saved and will be automatically submitted when the network is available.');
            return;
        }

        const pendingSubmissions = getPendingSubmissions();
        if (pendingSubmissions.length > 0) {
            for (const pendingData of pendingSubmissions) {
                const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
                    method: 'POST',
                    body: JSON.stringify(pendingData)
                });
                if (!response.ok) {
                    throw new Error('提交历史数据失败 Historical data submission failed');
                }
            }
            // Clear pending submissions after successful submission
            sessionStorage.removeItem('pendingSubmissions');
        }

        const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Reset all products' scanned status
            products.forEach(product => {
                product.scanned = false;
            });
            
            // Clear scan records
            scanRecords = [];
            
            // Update UI
            renderProducts();
            renderRecords();
            updateProgress();
            
            showCustomAlert('数据提交成功！Submission completed successfully!');
        } else {
            throw new Error('提交失败 Failed to submit');
        }
    } catch (error) {
        console.error('Error:', error);
        saveToSessionStorage(data);
        showCustomAlert('提交失败，数据已保存，将在下次提交时重试！Submission failed. Data has been saved and will be retried on the next submission attempt!');
    } finally {
        loadingOverlay.style.display = 'none';
    }
}

// Add event listeners for online/offline status
window.addEventListener('online', async () => {
    const pendingSubmissions = getPendingSubmissions();
    if (pendingSubmissions.length > 0) {
        showCustomAlert('检测到网络连接，正在提交保存的数据...Network connection detected, submitting saved data...');
        await submitToGoogleSheet();
    }
});

window.addEventListener('offline', () => {
    showCustomAlert('网络连接已断开。数据将保存在本地。Network connection has been disconnected. Data will be saved locally.');
});
// Also update where you create the record to store date and time separately
function submitQuantity() {
    const boxQuantity = parseInt(document.getElementById('boxQuantityInput').value) || 0;
    const pieceQuantity = parseInt(document.getElementById('pieceQuantityInput').value) || 0;

    if (boxQuantity === 0 && pieceQuantity === 0) {
        showCustomAlert('请至少输入一个数量！Please enter at least one quantity!');
        return;
    }

    currentProduct.scanned = true;

    // Create timestamp with correct format
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const time = now.toLocaleTimeString('en-GB', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const formattedDate = `${day}/${month}/${year}`;
    const timestamp = `${formattedDate} ${time}`;

    const record = {
        timestamp: timestamp,
        items: [{
            name: currentProduct.name,
            packaging: currentProduct.packaging,
            boxQuantity: boxQuantity,
            pieceQuantity: pieceQuantity,
            timestamp: timestamp
        }]
    };

    scanRecords.unshift(record);
    renderRecords();
    renderProducts();
    updateProgress();
    closeModal();
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/CR2-Stock-Take/service-worker.js').then(reg => {
    reg.update();
  });
}
function checkForUpdates() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(reg => {
      if (reg) reg.update();
    });
  }
}

const FIREBASE_DB_URL = "https://li-chuan-user-name-default-rtdb.asia-southeast1.firebasedatabase.app"; // Replace with your actual database URL

// Fetch users from Firebase (without SDK)
async function fetchUsersFromFirebase() {
  const url = `${FIREBASE_DB_URL}/pwauser.json`; // Fetches the entire 'pwauser' node

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();
    if (!data) throw new Error("No data found");

    return Object.entries(data).map(([id, userData]) => ({
      id,
      name: typeof userData === "string" ? userData.replace(/"/g, "") : userData.name || Object.values(userData)[0] || "Unknown",
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    showCustomAlert("获取用户数据失败！Failed to fetch user data!");
    return [];
  }
}

// Populate dropdown with users
async function populateUserDropdown() {
  const counterSelect = document.getElementById("counterSelect");

  // Check cache first
  const cachedData = getUsersFromCache();
  if (cachedData) {
    populateDropdownWithData(cachedData);
    return;
  }

  // Clear existing options except placeholder
  counterSelect.innerHTML = counterSelect.options[0].outerHTML;

  // Fetch users from Firebase
  const users = await fetchUsersFromFirebase();
  if (users.length === 0) return;

  users.forEach(user => {
    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = user.name;
    option.dataset.id = user.id;
    counterSelect.appendChild(option);
  });

  // Cache results for 12 hours
  cacheUsers(users);
}

// Cache users data for 12 hours
function cacheUsers(users) {
  localStorage.setItem("userCache", JSON.stringify({ timestamp: Date.now(), users }));
}

// Get users from cache if valid (12 hours = 43200000 ms)
function getUsersFromCache() {
  const cachedData = localStorage.getItem("userCache");
  if (!cachedData) return null;

  const { timestamp, users } = JSON.parse(cachedData);
  return Date.now() - timestamp < 43200000 ? users : (localStorage.removeItem("userCache"), null);
}

// Populate dropdown with cached data
function populateDropdownWithData(users) {
  const counterSelect = document.getElementById("counterSelect");
  counterSelect.innerHTML = counterSelect.options[0].outerHTML;

  users.forEach(user => {
    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = user.name;
    option.dataset.id = user.id;
    counterSelect.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", function() {
    populateUserDropdown();
    initializeSidePanel();
});

// Side Panel Logic
let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0; // To help distinguish scroll from swipe
let touchendY = 0; // To help distinguish scroll from swipe
const swipeThreshold = 50; // Minimum distance for a swipe
const swipeEdgeArea = 50; // How close to the edge swipe must start

function openSidePanel() {
    const sidePanel = document.getElementById('sidePanel');
    const overlay = document.getElementById('overlay');
    if (sidePanel && overlay) {
        sidePanel.classList.add('open');
        overlay.classList.add('active');
    }
}

function closeSidePanel() {
    const sidePanel = document.getElementById('sidePanel');
    const overlay = document.getElementById('overlay');
    if (sidePanel && overlay) {
        sidePanel.classList.remove('open');
        overlay.classList.remove('active');
    }
}

function handleSwipeGesture() {
    const deltaX = touchendX - touchstartX;
    const deltaY = touchendY - touchstartY;

    // Check if it's primarily a horizontal swipe and not a vertical scroll
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
        const sidePanel = document.getElementById('sidePanel');
        if (!sidePanel) return;

        if (deltaX > 0 && touchstartX < swipeEdgeArea && !sidePanel.classList.contains('open')) {
            // Swipe Right from left edge to open
            openSidePanel();
        } else if (deltaX < 0 && sidePanel.classList.contains('open')) {
            // Swipe Left to close (optional: can also rely on overlay click or close button)
            // For now, let's make it simple: any significant swipe left when open closes it.
            // More precise would be to check if swipe started inside panel or if touchendX is far left.
            // closeSidePanel(); // Let's use button/overlay for closing first to keep swipe open simple.
        }
    }
}

function initializeSidePanel() {
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closePanelBtn');

    if (overlay) {
        overlay.addEventListener('click', closeSidePanel);
    }
    if (closeButton) {
        closeButton.addEventListener('click', closeSidePanel);
    }

    document.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, { passive: true }); // Passive for performance, if not calling preventDefault

    document.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleSwipeGesture();
    }, { passive: true });

    const refreshOperatorsButton = document.getElementById('refreshOperatorsBtn');
    if (refreshOperatorsButton) {
        refreshOperatorsButton.addEventListener('click', forceRefreshOperatorList);
    }
}

async function forceRefreshOperatorList() {
    const refreshButton = document.getElementById('refreshOperatorsBtn');
    const originalButtonText = refreshButton ? refreshButton.textContent : "Refresh Operator List";

    if (!navigator.onLine) {
        showCustomAlert("Cannot refresh: You are offline.");
        return;
    }

    if (refreshButton) refreshButton.textContent = "Refreshing...";
    // Optional: Disable button refreshButton.disabled = true;

    try {
        const users = await fetchUsersFromFirebase();
        if (users && users.length > 0) {
            populateDropdownWithData(users);
            cacheUsers(users);
            showCustomAlert("Operator list updated successfully!");
        } else if (users && users.length === 0) {
            // Firebase returned an empty list
            populateDropdownWithData([]); // Clear the dropdown
            cacheUsers([]); // Cache the empty list
            showCustomAlert("Operator list is empty on the server.");
        } else {
            // fetchUsersFromFirebase itself might have shown an error if it returned null due to fetch failure
            // If it resolved to null or undefined without throwing an error that it caught itself:
            showCustomAlert("Failed to update operator list. Server might be unreachable or returned unexpected data.");
        }
    } catch (error) {
        // This catch is for errors thrown by fetchUsersFromFirebase if it doesn't handle them internally
        console.error("Error forcing refresh of operator list:", error);
        showCustomAlert("An error occurred while refreshing the operator list.");
    } finally {
        if (refreshButton) {
            refreshButton.textContent = originalButtonText;
            // refreshButton.disabled = false;
        }
        closeSidePanel(); // Close panel after attempt
    }
}
