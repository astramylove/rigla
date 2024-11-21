let data = {
  "Users": [
    {
      "ID": 1,
      "Username": "staffUser",
      "Password": "staff123",
      "Role": "staff",
      "FullName": "Семёнов Семён Семёнович",
      "Phone": "71234568890"
    },
    {
      "ID": 2,
      "Username": "adminUser",
      "Password": "admin123",
      "Role": "admin",
      "FullName": "Иванов Иван Иванович",
      "Phone": "74334568890"
    },
    {
      "ID": 3,
      "Username": "superAdminUser",
      "Password": "super123",
      "Role": "superAdmin",
      "FullName": "Петров Петр Петрович",
      "Phone": "71234328890"
    }
  ],
  "Suppliers": [
    {
      "ID": 1,
      "Name": "ООО 'ДИАМЕД'",
      "ContactInfo": "+7 (123) 456-78-90"
    },
    {
      "ID": 2,
      "Name": "ООО 'ФАРМГРУПП'",
      "ContactInfo": "+7 (098) 765-43-21"
    },
    {
      "ID": 3,
      "Name": "ЗАО 'МЕДТЕХ'",
      "ContactInfo": "+7 (111) 222-33-44"
    },
    {
      "ID": 4,
      "Name": "ИП 'ЗДОРОВЬЕ'",
      "ContactInfo": "+7 (555) 666-77-88"
    }
  ],
  "Medicines": [
    {
      "ID": 1,
      "Name": "Аспирин",
      "Dosage": "500 мг",
      "StartDate": "2023-01-01",
      "EndDate": "2025-01-01",
      "Quantity": 100,
      "Description": "Аспирин — это анальгетик и противовоспалительное средство, применяемое для облегчения боли и снижения температуры. Он эффективен при головной боли, зубной боли, мышечных и суставных болях, а также при лихорадке. Состав препарата включает ацетилсалициловую кислоту 500 мг в одной таблетке. Противопоказания: аллергия на салицилаты, язвы желудка и двенадцатиперстной кишки, геморрагические диатезы. Побочные действия могут включать тошноту, рвоту, головокружение и аллергические реакции. Разрешен детям старше 15 лет. Максимальная доза для взрослых — 3 г в сутки. Использовать по рекомендации врача.",
      "SupplierID": 1,
      "PrescriptionRequired": false,
      "Price": 50.00,
      "Shelf": "A",
      "Rack": "1"
    },
    {
      "ID": 2,
      "Name": "Парацетамол",
      "Dosage": "500 мг",
      "StartDate": "2023-06-01",
      "EndDate": "2025-06-01",
      "Quantity": 200,
      "Description": "Парацетамол — это анальгетик и жаропонижающее средство, используемое для лечения боли и лихорадки. Он эффективен при головной боли, зубной боли, мигрени и простудах. Состав препарата включает парацетамол 500 мг в одной таблетке. Противопоказания: аллергия на парацетамол, тяжелые заболевания печени и почек, хронический алкоголизм. Побочные действия могут включать аллергические реакции и нарушения функции печени. Разрешен детям старше 3 месяцев. Максимальная доза для взрослых — 4 г в сутки. Использовать по рекомендации врача.",
      "SupplierID": 2,
      "PrescriptionRequired": false,
      "Price": 30.00,
      "Shelf": "B",
      "Rack": "2"
    },
    {
      "ID": 3,
      "Name": "Лотатин",
      "Dosage": "500 мг",
      "StartDate": "2022-01-01",
      "EndDate": "2024-10-30",
      "Quantity": 100,
      "Description": "Лотатин — это обезболивающее средство, применяемое для облегчения боли различной локализации. Он эффективен при головной боли, зубной боли и послеоперационных болях. Состав препарата включает лотатин 500 мг в одной таблетке. Противопоказания: аллергия на компоненты препарата. Побочные действия могут включать тошноту и головную боль. Разрешен взрослым и детям старше 12 лет. Максимальная доза для взрослых — 3 г в сутки. Использовать по рекомендации врача.",
      "SupplierID": 1,
      "PrescriptionRequired": false,
      "Price": 50.00,
      "Shelf": "A",
      "Rack": "1"
    },
    {
      "ID": 4,
      "Name": "Парацетамол",
      "Dosage": "500 мг",
      "StartDate": "2023-06-01",
      "EndDate": "2025-06-01",
      "Quantity": 0,
      "Description": "Парацетамол — это анальгетик и антипиретик, применяемый для облегчения боли и снижения температуры. Он эффективен при головной боли, зубной боли, мигрени и лихорадке. Состав препарата включает парацетамол 500 мг в одной таблетке. Противопоказания: аллергия на парацетамол, тяжелые заболевания печени и почек, хронический алкоголизм, беременность (особенно в первом триместре). Побочные действия могут включать аллергические реакции и нарушения функции печени. Разрешен детям старше 3 месяцев. Максимальная доза для взрослых — 4 г в сутки. Использовать по рекомендации врача.",
      "SupplierID": 2,
      "PrescriptionRequired": false,
      "Price": 30.00,
      "Shelf": "B",
      "Rack": "2"
    },
    {
      "ID": 5,
      "Name": "Ибупрофен",
      "Dosage": "400 мг",
      "StartDate": "2023-01-15",
      "EndDate": "2025-01-15",
      "Quantity": 150,
      "Description": "Ибупрофен — это противовоспалительное средство, применяемое для уменьшения боли и воспаления. Он эффективен при головной боли, зубной боли, болях в спине и менструальных болях. Состав препарата включает ибупрофен 400 мг в одной таблетке. Противопоказания: язвы желудка и двенадцатиперстной кишки, аллергия на НПВС, тяжелые заболевания печени и почек. Побочные действия могут включать головную боль, расстройства ЖКТ и аллергические реакции. Разрешен детям старше 6 лет. Максимальная доза для взрослых — 1,2 г в сутки. Использовать по рекомендации врача.",
      "SupplierID": 3,
      "PrescriptionRequired": false,
      "Price": 45.00,
      "Shelf": "C",
      "Rack": "1"
    },
    {
      "ID": 6,
      "Name": "Анальгин",
      "Dosage": "500 мг",
      "StartDate": "2023-02-01",
      "EndDate": "2024 - 12 - 31",
      "Quantity": 80,
      "Description": "Анальгин — это анальгезирующее ненаркотическое средство, обладающее обезболивающим и жаропонижающим действием.Применяется при болях различного происхождения: головная боль, зубная боль, послеоперационная боль и колики.Состав препарата включает метамизол натрия 500 мг в одной таблетке.Противопоказания: аллергия на метамизол натрия, тяжелые заболевания печени и почек.Побочные действия могут включать аллергические реакции и снижение давления.Разрешен взрослым и детям старше 3 месяцев с соблюдением дозировки.Максимальная доза для взрослых — 3 г в сутки.Использовать по рекомендации врача.",
      "SupplierID": 4,
      "PrescriptionRequired": false,
      "Price": 25.00,
      "Shelf": "D",
      "Rack": "2"
    },
    {
      ID: 7,
      Name: 'Цитрамон',
      Dosage: '500 мг',
      StartDate: '2023-03-01',
      EndDate: '2025-03-01',
      Quantity: 120,
      Description: 'Цитрамон — это комбинированное обезболивающее и жаропонижающее средство, применяемое при головной боли и простудах. Он эффективен при легкой и умеренной боли, а также при повышенной температуре тела. Состав препарата включает парацетамол, ацетилсалициловую кислоту и кофеин в одной таблетке (500 мг). Противопоказания: аллергия на компоненты препарата, язвы желудка и двенадцатиперстной кишки, заболевания печени и почек. Побочные действия могут включать тошноту, головную боль и аллергические реакции. Разрешен взрослым и детям старше 15 лет. Максимальная доза для взрослых — 3 г в сутки. Использовать по рекомендации врача.',
      SupplierID: 1,
      PrescriptionRequired: false,
      Price: 20.00,
      Shelf: 'A',
      Rack: '3'
    },
    {
      ID: 8,
      Name: 'Кеторолак',
      Dosage: '10 мг / мл',
      StartDate: '2023-04-01',
      EndDate: '2025-04-01',
      Quantity: 60,
      Description: 'Кеторолак — это сильное обезболивающее средство, используемое для лечения острого болевого синдрома после операций или травм. Он эффективен при сильных болях различного происхождения. Состав препарата включает кеторолак трометамин в дозировке 10 мг/мл во флаконе или ампуле (в зависимости от формы выпуска). Противопоказания: язвы желудка или двенадцатиперстной кишки, тяжелые заболевания почек или печени, аллергия на НПВС. Побочные действия могут включать головную боль, тошноту и расстройства ЖКТ. Разрешен взрослым только по рецепту врача с соблюдением дозировки; не рекомендуется детям до 16 лет.',
      SupplierID: 2,
      PrescriptionRequired: true,
      Price: 70.00,
      Shelf: 'E',
      Rack: '4'
    },
    {
      ID: 9,
      Name: 'Амоксициллин',
      Dosage: '500 мг',
      StartDate: '2023-05-01',
      EndDate: '2025-05-01',
      Quantity: 200,
      Description: 'Амоксициллин — это антибиотик широкого спектра действия, применяемый для лечения бактериальных инфекций дыхательных путей, мочевыводящих путей и других инфекций организма. Состав препарата включает амоксициллин тригидрат в дозировке 500 мг в одной таблетке или капсуле (в зависимости от формы выпуска). Противопоказания: аллергия на пенициллины или другие бета-лактамные антибиотики; тяжелые заболевания печени или почек; инфекционный мононуклеоз; лимфоцитарная лейкозы; беременность (особенно в первом триместре). Побочные действия могут включать диарею, сыпь или аллергические реакции (в редких случаях анафилаксия). Разрешен детям старше трех месяцев с соблюдением дозировки; максимальная доза для взрослых — до 6 г в сутки в зависимости от инфекции.',
      SupplierID: 3,
      PrescriptionRequired: true,
      Price: 55.00,
      Shelf: 'F',
      Rack: '1'
    },
    {
      ID: 10,
      Name: 'Лоратадин',
      Dosage: '10 мг',
      StartDate: '2023-06-01',
      EndDate: '2025-06-01',
      Quantity: 180,
      Description: 'Лоратадин — это антигистаминное средство второго поколения для лечения аллергических реакций таких как ринит или крапивница у взрослых и детей старше двух лет. Состав препарата включает лоратадин в дозировке 10 мг в одной таблетке или сиропе (в зависимости от формы выпуска). Противопоказания: гиперчувствительность к лоратадину или другим компонентам препарата; беременность (особенно в первом триместре) следует использовать с осторожностью; не рекомендуется применять одновременно с другими антигистаминными средствами без консультации врача; не рекомендуется детям младше двух лет без назначения врача; побочные эффекты могут включать головную боль, сухость во рту или сонливость (в редких случаях). Максимальная доза для взрослых составляет до двух таблеток (20 мг) в сутки.',
      SupplierID: 4,
      PrescriptionRequired: false,
      Price: 35.00,
      Shelf: 'G',
      Rack: '2'
    },
    {
      "ID": 11,
      "Name": "Метформин",
      "Dosage": "500 мг",
      "StartDate": "2023-07-01",
      "EndDate": "2025-07-01",
      "Quantity": 130,
      "Description": "Метформин — это препарат, применяемый для лечения диабета второго типа. Он помогает контролировать уровень сахара в крови, улучшая чувствительность клеток к инсулину и уменьшая выработку глюкозы в печени. Состав препарата включает метформин 500 мг в одной таблетке. Противопоказания: почечная недостаточность, тяжелые заболевания печени, аллергия на метформин, а также состояние, связанное с повышенным уровнем молочной кислоты в крови (лактатный ацидоз). Побочные действия могут включать тошноту, диарею, боли в животе и потерю аппетита. Разрешен взрослым и детям старше 10 лет. Максимальная доза для взрослых — 2 г в сутки. Использовать по рекомендации врача.",
      "SupplierID": 1,
      "PrescriptionRequired": true,
      "Price": 40.00,
      "Shelf": "H",
      "Rack": "3"
    },
    {
      "ID": 12,
      "Name": "Симвастатин",
      "Dosage": "20 мг",
      "StartDate": "2023-08-01",
      "EndDate": "2025-08-01",
      "Quantity": 90,
      "Description": "Симвастатин — это средство для снижения уровня холестерина в крови. Он используется для лечения гиперхолестеринемии и профилактики сердечно-сосудистых заболеваний. Состав препарата включает симвастатин 20 мг в одной таблетке. Противопоказания: активные заболевания печени, беременность и лактация, аллергия на симвастатин или другие статины. Побочные действия могут включать головную боль, расстройства ЖКТ (тошнота, запор), мышечные боли и слабость. Разрешен взрослым только по рецепту врача. Максимальная доза для взрослых — до 80 мг в сутки, в зависимости от состояния пациента и уровня холестерина.",
      "SupplierID": 2,
      "PrescriptionRequired": true,
      "Price": 60.00,
      "Shelf": "I",
      "Rack": "4"
    },
    {
      "ID": 13,
      "Name": "Флуоксетин",
      "Dosage": "20 мг",
      "StartDate": "2023-09-01",
      "EndDate": "2025-09-01",
      "Quantity": 75,
      "Description": "Флуоксетин — это антидепрессант, применяемый для лечения депрессий и тревожных расстройств. Он относится к группе селективных ингибиторов обратного захвата серотонина (СИОЗС), что способствует повышению уровня серотонина в мозге. Состав препарата включает флуоксетин 20 мг в одной капсуле. Противопоказания: аллергия на флуоксетин, использование вместе с моноаминоксидазными ингибиторами (МАО), беременность и лактация (требуется осторожность). Побочные действия могут включать головную боль, бессонницу, тошноту и снижение либидо. Разрешен взрослым и детям старше 8 лет с соблюдением дозировки; максимальная доза для взрослых составляет до 80 мг в сутки.",
      "SupplierID": 3,
      "PrescriptionRequired": true,
      "Price": 65,
      "Shelf": "J",
      "Rack": "1"
    },
    {
      "ID": 14,
      "Name": "Лизиноприл",
      "Dosage": "10 мг",
      "StartDate": "2023-10-01",
      "EndDate": "2025-10-01",
      "Quantity": 110,
      "Description": 'Лизиноприл — это препарат для лечения гипертонии и сердечной недостаточности. Он является ингибитором ангиотензин-превращающего фермента (АПФ), что приводит к снижению уровня ангиотензина II и расширению сосудов. Состав препарата включает лизиноприл 10 мг в одной таблетке. Противопоказания: аллергия на лизиноприл или другие ингибиторы АПФ; беременность; тяжелые нарушения функции почек; стеноз почечной артерии. Побочные действия могут включать головокружение, кашель, повышение уровня калия в крови и аллергические реакции. Разрешен взрослым; максимальная доза для взрослых составляет до 40 мг в сутки.',
      SupplierID: 4,
      PrescriptionRequired: true,
      Price: 50,
      Shelf: 'K',
      Rack: '2'
    },
    {
      ID: 15,
      Name: 'Аторвастатин',
      Dosage: '40 мг',
      StartDate: '2023-11-01',
      EndDate: '2025-11-01',
      Quantity: 140,
      Description: 'Аторвастатин — это средство для снижения уровня холестерина в крови, используемое при гиперхолестеринемии и для профилактики сердечно-сосудистых заболеваний. Он ингибирует фермент ГМГ-КоА редуктазу, что снижает уровень холестерина липопротеидов низкой плотности (ЛПНП). Состав препарата включает аторвастатин 40 мг в одной таблетке. Противопоказания: активные заболевания печени, беременность и лактация, аллергия на аторвастатин или другие статины. Побочные действия могут включать головную боль, расстройства ЖКТ (тошнота, запор), мышечные боли и слабость. Разрешен взрослым только по рецепту врача; максимальная доза для взрослых составляет до 80 мг в сутки.',
      SupplierID: 1,
      PrescriptionRequired: true,
      Price: 55,
      Shelf: 'L',
      Rack: '3'
    },
    {
      ID: 16,
      Name: 'Омепразол',
      Dosage: '20 мг',
      StartDate: '2023-12-01',
      EndDate: '2025-12-01',
      Quantity: 160,
      Description: 'Омепразол — это препарат для лечения язвы желудка и гастрита, а также при рефлюксной болезни. Он является ингибитором протонной помпы, что снижает выработку желудочной кислоты. Состав препарата включает омепразол 20 мг в одной капсуле или таблетке (в зависимости от формы выпуска). Противопоказания: аллергия на омепразол или другие ингибиторы протонной помпы; тяжелые заболевания печени; беременность (особенно в первом триместре). Побочные действия могут включать головную боль, тошноту и расстройства ЖКТ (диарея или запор). Разрешен взрослым и детям старше 1 года с соблюдением дозировки; максимальная доза для взрослых составляет до 40 мг в сутки.',
      SupplierID: 2,
      PrescriptionRequired: false,
      Price: 45,
      Shelf: 'M',
      Rack: '4'
    },
    {
      ID: 17,
      Name: 'Дексаметазон',
      Dosage: '4 мг',
      StartDate: '2024-01-01',
      EndDate: '2026-01-01',
      Quantity: 50,
      Description: 'Дексаметазон — это кортикостероидный препарат для лечения воспалительных заболеваний и аллергических реакций. Он уменьшает воспаление и подавляет иммунный ответ организма. Состав препарата включает дексаметазон 4 мг в одной таблетке или ампуле (в зависимости от формы выпуска). Противопоказания: системные грибковые инфекции, тяжелые вирусные инфекции, гиперчувствительность к дексаметазону; необходимо с осторожностью применять при инфекциях или при наличии других заболеваний эндокринной системы. Побочные действия могут включать увеличение веса, повышение артериального давления и изменения настроения. Разрешен взрослым только по рецепту врача; максимальная доза зависит от состояния пациента.',
      SupplierID: 3,
      PrescriptionRequired: true,
      Price: 80,
      Shelf: 'N',
      Rack: '1'
    },
    {
      ID: 18,
      Name: 'Кларитромицин',
      Dosage: '250 мг',
      StartDate: '2024-02-01',
      EndDate: '2026-02-01',
      Quantity: 100,
      Description: 'Кларитромицин — это антибиотик для лечения бактериальных инфекций дыхательных путей, кожи и мягких тканей. Он относится к группе макролидов и подавляет синтез белка бактерий. Состав препарата включает кларитромицин 250 мг в одной таблетке или капсуле (в зависимости от формы выпуска). Противопоказания: аллергия на кларитромицин или другие макролиды; тяжелые заболевания печени; беременность (особенно в первом триместре) следует использовать с осторожностью; не рекомендуется применять одновременно с другими антибиотиками без консультации врача; побочные действия могут включать диарею, тошноту или аллергические реакции (в редких случаях анафилаксия). Разрешен взрослым и детям старше шести месяцев с соблюдением дозировки; максимальная доза для взрослых составляет до 1 г в сутки.',
      SupplierID: 4,
      PrescriptionRequired: true,
      Price: 70,
      Shelf: 'O',
      Rack: '2'
    },
    {
      ID: 19,
      Name: "Триметоприм",
      Dosage: "100 мг",
      StartDate: "2024-03-01",
      EndDate: "2026-03-01",
      Quantity: 90,
      Description: "Триметоприм — это антибиотик для лечения инфекций мочевыводящих путей и некоторых других бактериальных инфекций. Он блокирует синтез фолата у бактерий, что приводит к их гибели. Состав препарата включает триметоприм в дозировке 100 мг в одной таблетке или капсуле (в зависимости от формы выпуска). Противопоказания включают аллергическую реакцию на триметоприм или другие компоненты препарата; тяжелые нарушения функции почек; беременность (особенно первый триместр) следует использовать с осторожностью; побочные действия могут включать тошноту, рвоту и кожные высыпания. Разрешен взрослым и детям старше двух месяцев с соблюдением дозировки; максимальная доза для взрослых составляет до 320 мг в сутки.",
      SupplierID: 1,
      PrescriptionRequired: true,
      Price: 38,
      Shelf: "P",
      Rack: "3"
    },
    {
      ID: 20,
      Name: "Глюкозамин",
      Dosage: "500 мг",
      StartDate: "2024-04-01",
      EndDate: "2026-04-01",
      Quantity: 110,
      Description: "Глюкозамин — это средство для поддержания здоровья суставов и хрящей. Он используется при остеоартрите и других заболеваниях суставов для уменьшения боли и улучшения подвижности суставов. Состав препарата включает глюкозамин сульфат в дозировке 500 мг в одной капсуле или таблетке (в зависимости от формы выпуска). Противопоказания включают аллергию на морепродукты (так как глюкозамин часто получают из раковин) и беременность (особенно первый триместр); побочные действия могут включать расстройства желудка или диарею. Разрешен взрослым только по рекомендации врача; максимальная доза зависит от состояния пациента.",
      SupplierID: 2,
      PrescriptionRequired: false,
      Price: 55,
      Shelf: "Q",
      Rack: "4"
    },
    {
      ID: 21,
      Name: "Кальций Д3",
      Dosage: "500 мг",
      StartDate: "2024-05-01",
      EndDate: "2026-05-01",
      Quantity: 120,
      Description: "Кальций Д3 — это добавка к пище для укрепления костей и зубов. Она содержит кальций карбонат и витамин D3 для улучшения усвоения кальция организмом. Состав препарата включает кальций карбонат в дозировке 500 мг и витамин D3 во флаконе или таблетках (в зависимости от формы выпуска). Противопоказания включают гиперкальциемию (повышенный уровень кальция в крови) и аллергические реакции на компоненты препарата; побочные действия могут включать запоры или расстройства пищеварения. Разрешен взрослым и детям старше трех лет; максимальная доза зависит от возраста пациента.",
      SupplierID: 3,
      PrescriptionRequired: false,
      Price: 25,
      Shelf: "R",
      Rack: "1"
    }
  ],
  "Orders": [
    {
      "ID": 1,
      "Medicines": [
        {
          "MedicineName": "Парацетамол",
          "Price": 30.00,
          "Quantity": 2
        },
        {
          "MedicineName": "Аспирин",
          "Price": 50.00,
          "Quantity": 2
        }
      ]
    },
    {
      "ID": 2,
      "Medicines": [
        {
          "MedicineName": "Парацетамол",
          "Price": 30.00,
          "Quantity": 2
        },
        {
          "MedicineName": "Аспирин",
          "Price": 50.00,
          "Quantity": 2
        }
      ]
    },
    {
      "ID": 3,
      "Medicines": [
        {
          "MedicineName": "Парацетамол",
          "Price": 30.00,
          "Quantity": 2
        },
        {
          "MedicineName": "Аспирин",
          "Price": 50.00,
          "Quantity": 4
        }
      ]
    }
  ],
  "ReceiptJournal": [
    {
      "ID": 1,
      "OrderID": 1,
      "User": 'Семёнов Семён Семёнович',
      "Date": "2024-10-29",
      "Time": "12:00:00"
    },
    {
      "ID": 2,
      "OrderID": 2,
      "User": 'Семёнов Семён Семёнович',
      "Date": "2024-10-29",
      "Time": "12:30:00"
    },
    {
      "ID": 3,
      "OrderID": 3,
      "User": 'Семёнов Семён Семёнович',
      "Date": "2024-10-29",
      "Time": "12:50:00"
    }
  ],
  "Notifications": [
  ]
}
const saveDataToLocalStorage = (Data) => {
  localStorage.setItem('appData', JSON.stringify(Data));
}

const loadDataFromLocalStorage = () => {
  const storedData = localStorage.getItem('appData');
  return storedData ? JSON.parse(storedData) : null;
}

// Загрузка данных при загрузке страницы
let jsonData = loadDataFromLocalStorage();

if (!jsonData) {
  saveDataToLocalStorage(data);
  jsonData = loadDataFromLocalStorage();
}

const startProgram = (jsonData) => {

  // Страницы
  const pageInventory = document.querySelector(".page__inventory");
  const pageUsers = document.querySelector(".page__users");
  const pageCancellation = document.querySelector(".page__cancellation");
  const pageOrderLog = document.querySelector(".page__receipt-log");
  const pageOrder = document.querySelector(".page__order");

  const gebridMenu = document.querySelector(".gebrid-menu");

  // Элементы 
  const navMenu = document.querySelectorAll(".nav-menu .page");

  const inventoryTable = document.querySelector(".container__inventory-table");
  const usersTable = document.querySelector(".container__users-table");
  const cancellationTable = document.querySelector(".container__cancellation-table");
  const orderLogTable = document.querySelector(".container__order-log-table");
  const orderStaffTable = document.querySelector(".container__order-staff-table");
  const orderChekTable = document.querySelector(".container__order-chek-table");

  const containerBtnSearch = document.querySelector(".container__btn-search");
  const containerOrderBtn = document.querySelector(".container__order-btn");
  const containerOrderCheck = document.querySelector(".container__order-check");

  const formTitle = document.querySelector(".form-title");
  const capContainerNotify = document.querySelector(".cap-container__notify");
  const containerNotifications = document.querySelector(".container__notifications");
  const containerExit = document.querySelector(".container__exit");
  const capContainerLogOut = document.querySelector(".cap-container__log-out");
  const openExit = document.querySelector(".open__exit");

  const startPages = document.querySelectorAll('.start-page')


  // Кнопки 
  const addProductBtn = document.querySelector(".add-product");
  const addUsersBtn = document.querySelector(".add-users");
  const backReceiptBtn = document.querySelector(".back-receipt");

  const editBtnProduct = document.querySelectorAll(".edit-btn__product");
  const editBtnUser = document.querySelectorAll(".edit-btn__user");
  const deleteBtn = document.querySelectorAll(".delete-btn");
  const gebridMenuClose = document.querySelector(".gebrid-menu__close");
  const exitBtn = document.querySelector(".exit");

  const arrowsBack = document.querySelectorAll('.arrow-back')
  const arrowsNext = document.querySelectorAll('.arrow-next')
  // Формы
  const formAddProduct = document.querySelector(".form__add-product");
  const formAddUser = document.querySelector(".form__add-user");

  // Переменные
  let restrictionOfElements
  if (localStorage.getItem('restrictionOfElements')) {
    restrictionOfElements = localStorage.getItem('restrictionOfElements')
    const tens = document.querySelectorAll('.ten');
    const twentys = document.querySelectorAll('.twenty');
    if (restrictionOfElements == 10) {
      tens.forEach((t) => {
        t.style.textDecoration = 'underline';
      });
      twentys.forEach((tw) => {
        tw.style.textDecoration = 'none';
      });
    } else {
      tens.forEach((t) => {
        t.style.textDecoration = 'none';
      });
      twentys.forEach((tw) => {
        tw.style.textDecoration = 'underline';
      });
    }
  } else {
    restrictionOfElements = 10
  }
  let nowPageOnTable = 1
  let maxPageOnTable = 0


  // Универсальная функция для переключения страниц
  function toggleVisibility(elementsToShow, elementsToHide) {
    elementsToHide.forEach(el => el.style.display = 'none');
    elementsToShow.forEach(el => el.style.display = 'flex');
    containerBtnSearch.style.display = 'flex';
    containerBtnSearch.style.justifyContent = 'space-between';
    nowPageOnTable = 1
    arrowsNext.forEach(a => {
      a.style.visibility = 'visible'
      a.style.pointerEvents = 'all'
    })
    navMenu.forEach(el => {
      el.classList.toggle('roboto-bold', el.textContent === elementsToShow[0].textContent);
      el.classList.toggle('roboto-light', el.textContent !== elementsToShow[0].textContent);
    });
  };

  // Переключение страниц
  pageInventory.addEventListener("click", () => {
    toggleVisibility([inventoryTable, addProductBtn], [
      usersTable, addUsersBtn, cancellationTable,
      orderLogTable, containerOrderBtn, orderStaffTable,
      backReceiptBtn, containerOrderCheck
    ]);
    highlightActivePage('Запасы');
    populateTable()
    document.querySelector('.search').value = ''
  });

  pageUsers.addEventListener("click", () => {
    toggleVisibility([usersTable, addUsersBtn], [
      inventoryTable, addProductBtn, cancellationTable,
      orderLogTable, containerOrderBtn, orderStaffTable,
      backReceiptBtn, containerOrderCheck
    ]);
    highlightActivePage('Пользователи');
    populateUsersTable();
    sortUserOptionCreate()
    document.querySelector('.search').value = ''
  });

  pageCancellation.addEventListener("click", () => {
    toggleVisibility([cancellationTable], [
      usersTable, addUsersBtn, inventoryTable,
      addProductBtn, orderLogTable, containerOrderBtn,
      orderStaffTable, containerOrderCheck, orderChekTable,
      backReceiptBtn
    ]);
    containerBtnSearch.style.justifyContent = 'end';
    highlightActivePage('Списание');
    populateWriteOffMedicines()
    document.querySelector('.search').value = ''
  });

  pageOrderLog.addEventListener("click", () => {
    toggleVisibility([orderLogTable], [
      usersTable, addUsersBtn, inventoryTable,
      addProductBtn, cancellationTable, containerOrderBtn,
      orderStaffTable, containerOrderCheck, orderChekTable,
      backReceiptBtn
    ]);
    containerBtnSearch.style.justifyContent = 'end';
    highlightActivePage('Журнал чеков');
    populateOrderLogTable()
    document.querySelector('.search').value = ''
    sortReceiptOptionCreate()
  });

  pageOrder.addEventListener("click", (e) => {
    toggleVisibility([orderStaffTable, containerOrderBtn], [
      usersTable, addUsersBtn, inventoryTable,
      addProductBtn, cancellationTable, orderLogTable,
      containerOrderCheck, orderChekTable,
      backReceiptBtn
    ]);
    containerBtnSearch.style.display = 'none'
    highlightActivePage('Оформить заказ');
    document.querySelector('.search').value = ''
    loadOrderPage()
  });




  const highlightActivePage = (activePage) => {
    navMenu.forEach(el => {
      if (el.textContent === activePage) {
        el.classList.add('roboto-bold');
      } else {
        el.classList.remove('roboto-bold');
      }
    });
  };

  // Действия с кнопками
  backReceiptBtn.addEventListener("click", () => {
    toggleVisibility([orderLogTable], [
      usersTable, addUsersBtn, inventoryTable,
      addProductBtn, cancellationTable,
      containerOrderBtn, orderStaffTable,
      containerOrderCheck, orderChekTable, containerBtnSearch
    ]);
    containerBtnSearch.style.justifyContent = 'end';
    highlightActivePage('Журнал чеков');
  });

  // Обработчики для редактирования пользователей и продуктов
  editBtnUser.forEach(el => {
    el.addEventListener('click', (e) => {
      gebridMenu.style.width = '878px';
      setTimeout(() => {
        gebridMenuClose.style.display = 'block';
        formAddUser.style.display = 'flex';
        formTitle.style.display = 'flex';
        formTitle.textContent = 'Редактирование информации о пользователе';
      }, 500);
      overlay.style.display = 'block';
    });
  });


  // Обработчики для добавления пользователей и продуктов
  addUsersBtn.addEventListener('click', () => {
    gebridMenu.style.width = '878px';
    setTimeout(() => {
      gebridMenuClose.style.display = 'block';
      formAddUser.style.display = 'flex';
      formTitle.style.display = 'flex';
      formTitle.textContent = 'Новый пользователь';
    }, 300);
    overlay.style.display = 'block';
  });

  addProductBtn.addEventListener('click', () => {
    gebridMenu.style.width = '878px';
    setTimeout(() => {
      gebridMenuClose.style.display = 'block';
      formAddProduct.style.display = 'flex';
      formTitle.style.display = 'flex';
      formTitle.textContent = 'Новый продукт';
    }, 300);
    overlay.style.display = 'block';
  });

  // Закрытие меню редактирования
  gebridMenuClose.addEventListener('click', () => {
    gebridMenu.style.width = '133px';
    gebridMenuClose.style.display = 'none';
    if (formAddUser.style.display == 'flex') {
      document.querySelector('.btn-wrap .btn').textContent = 'Добавить пользователя'
    } else {
      document.querySelector('.form__add-product .btn').textContent = 'Добавить продукт'
    }
    formAddProduct.style.display = 'none';
    formAddUser.style.display = 'none';
    formTitle.style.display = 'none';
    overlay.style.display = 'none';
    formAddUser.reset()
    formAddProduct.reset()
    document.getElementById('error-message__user').style.display = 'none';
    formAddProduct.dataset.id = ''
    formAddUser.dataset.id = ''

  });

  // Уведомления
  capContainerNotify.addEventListener('click', () => {
    contNotifyFunction()
    containerExit.style.height = '0px';
    capContainerLogOut.style.backgroundColor = '#66A8A6'
    openExit.style.transform = 'rotate(0deg)'
  });
  const contNotifyFunction = () => {
    if (containerNotifications.style.height == 'auto') {
      containerNotifications.style.height = '0px';
      capContainerNotify.parentElement.style.backgroundColor = '#66A8A6'
    } else {
      containerNotifications.style.height = 'auto';
      capContainerNotify.parentElement.style.backgroundColor = '#75C1BF'
    }
  }
  // exitBtn
  exitBtn.addEventListener('click', () => {
    localStorage.setItem('userSession', JSON.stringify(''));
    window.location.href = 'index.html';
  })
  capContainerLogOut.addEventListener('click', () => {
    contLogOutFunction()
    containerNotifications.style.height = '0px';
    capContainerNotify.parentElement.style.backgroundColor = '#66A8A6'
  });
  const contLogOutFunction = () => {
    if (containerExit.style.height == 'auto') {
      containerExit.style.height = '0px';
      capContainerLogOut.style.backgroundColor = '#66A8A6'
      openExit.style.transform = 'rotate(0deg)'
    } else {
      containerExit.style.height = 'auto';
      capContainerLogOut.style.backgroundColor = '#75C1BF'
      openExit.style.transform = 'rotate(180deg)'
    }
  }
  // Открытие фильтра
  const filterIcon = document.getElementById('filter-icon');
  const filterModal = document.getElementById('filter-modal');
  const closeModal = document.getElementById('close-modal');


  // Открытие модального окна при клике на иконку фильтра
  filterIcon.onclick = function () {
    filterModal.style.display = "block";
  }

  // Закрытие модального окна при клике на крестик
  closeModal.onclick = function () {
    filterModal.style.display = "none";
  }

  // Закрытие модального окна при клике вне его
  window.onclick = function (event) {
    if (event.target === filterModal) {
      filterModal.style.display = "none";
    }
  }


  // Получение данных из локального хранилища
  const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('appData');
    return data ? JSON.parse(data) : null;
  }

  const restrictionOfElementsFunction = () => {
    const tens = document.querySelectorAll('.ten');
    const twentys = document.querySelectorAll('.twenty');
    tens.forEach((ten) => {
      ten.addEventListener('click', () => {
        restrictionOfElements = 10;

        tens.forEach((t) => {
          t.style.textDecoration = 'underline';
        });
        twentys.forEach((tw) => {
          tw.style.textDecoration = 'none';
        });

        populateOrderLogTable();
        populateTable();
        populateUsersTable();
        populateWriteOffMedicines();
        localStorage.setItem('restrictionOfElements', 10)
      });
    });

    twentys.forEach((twenty) => {
      twenty.addEventListener('click', () => {
        restrictionOfElements = 20;
        console.log(tens);

        twentys.forEach((tw) => {
          tw.style.textDecoration = 'underline';
        });
        tens.forEach((t) => {
          t.style.textDecoration = 'none';
        });

        populateOrderLogTable();
        populateTable();
        populateUsersTable();
        populateWriteOffMedicines();
        localStorage.setItem('restrictionOfElements', 20)
      });
    });
  }

  restrictionOfElementsFunction()

  const nowPageOnTableFunctionStart = () => {
    arrowsBack.forEach((arrowBack) => {
      arrowBack.addEventListener('click', () => {
        nowPageOnTableFunction('back')
        populateTable()
      })
    })
    arrowsNext.forEach((arrowNext) => {
      arrowNext.addEventListener('click', () => {
        nowPageOnTableFunction('next')
        populateTable()
      })
    })
  }

  const nowPageOnTableFunction = (justdoit) => {
    if (justdoit == 'back') {
      nowPageOnTable -= 1

      if (nowPageOnTable == 1) {
        arrowsBack.forEach(a => {
          a.style.visibility = 'hidden'
          a.style.pointerEvents = 'none'
        })
      }

      arrowsNext.forEach(a => {
        a.style.visibility = 'visible'
        a.style.pointerEvents = 'all'
      })

    } else if (justdoit == 'next') {
      nowPageOnTable += 1
      arrowsBack.forEach(a => {
        a.style.visibility = 'visible'
        a.style.pointerEvents = 'all'
      })
    }
  }


  //                                                           УВЕДОМЛЕНИЯ

  const NotificationsGenerate = () => {
    const userNow = JSON.parse(localStorage.getItem('userSession'))
    const jsonData = getDataFromLocalStorage()
    const notifyCont = document.querySelector('#notify-table tbody')
    const notifyQuantity = document.querySelector('#notify-table .quality-notify')
    let quality = 0
    notifyCont.innerHTML = ''
    jsonData.Notifications.forEach((notify) => {
      if (notify.UserID.some(n => n === userNow.ID)) {
        const row = document.createElement('tr');
        quality += 1
        row.innerHTML = `
          <td>${notify.Message}<br> 
          <span class="notifications-date">${notify.Data}</span></td>
          <td><img src="icons/crest.svg" alt="" class='btn-delete-notify' data-id='${notify.ID}'></td>
          `
        notifyCont.appendChild(row);
      }
    })
    const btnsDeleteNotify = notifyCont.querySelectorAll('.btn-delete-notify')
    btnsDeleteNotify.forEach((btnDeleteNotify) => {
      btnDeleteNotify.addEventListener('click', (e) => {
        const notifyID = Number(e.target.dataset.id)
        const jsonData = getDataFromLocalStorage()
        const userNow = JSON.parse(localStorage.getItem('userSession'))

        jsonData.Notifications.forEach((notify) => {
          console.log((notify.ID == notifyID), notify.ID, notifyID, notify.UserID);

          if (!(notify.ID == notifyID)) return
          notify.UserID = notify.UserID.filter(num => num !== userNow.ID)
          console.log(notify.UserID);

        })

        localStorage.setItem('appData', JSON.stringify(jsonData))
        NotificationsGenerate()
      })
    })

    const btnClear = document.querySelector('#notify-table .btn-clear')
    btnClear.addEventListener('click', () => {
      const jsonData = getDataFromLocalStorage()
      jsonData.Notifications.forEach((notify) => {
        const userNow = JSON.parse(localStorage.getItem('userSession'))
        if (!(notify.UserID.includes(userNow.ID))) return
        notify.UserID = notify.UserID.filter(num => num !== userNow.ID)
        console.log(notify.UserID);

      })
      localStorage.setItem('appData', JSON.stringify(jsonData))
      NotificationsGenerate()
    })

    notifyQuantity.textContent = quality

  }
  NotificationsGenerate()

  const NotificationsCreate = (specific, med) => {
    const jsonData = getDataFromLocalStorage()
    console.log();

    let arrayID = []
    jsonData.Users.forEach((user) => {
      if (user.Role == 'staff' || user.Role == 'admin') {
        arrayID.push(Number(user.ID))
      }
    })
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;

    let notify = {
      "ID": jsonData.Notifications.length > 0 ? jsonData.Notifications[jsonData.Notifications.length - 1].ID + 1 : 1,
      "MedicineID": med.ID,
      "Data": formattedDate,
      "UserID": arrayID,
      "Message": ""
    }
    if (specific == 'date') {
      notify.Message = `У препарата '${med.Name}' закончился срок годности!`
    } else if (specific == 'quality') {
      notify.Message = `Препарат '${med.Name}' закончился, нужно заказать!`
    }
    return notify
  }


  //                                                          ЗАПАСЫ ПОЛНАЯ РАБОТА
  const getSupplierName = (supplierId, suppliers) => {
    const supplier = suppliers.find(s => Number(s.ID) == Number(supplierId));
    return supplier ? supplier.Name : 'Неизвестный поставщик';
  }

  const addEventListenerCreateEdit = (btn) => {
    btn.forEach(el => {
      el.addEventListener('click', (e) => {
        const targetButton = e.target;
        const dataId = targetButton.dataset.id;
        gebridMenu.style.width = '878px';
        setTimeout(() => {
          gebridMenuClose.style.display = 'block';
          formAddProduct.style.display = 'flex';
          formAddProduct.dataset.id = dataId;
          formTitle.style.display = 'flex';
          formTitle.textContent = 'Редактирование информации о продукте';
          document.querySelector('.form__add-product .btn').textContent = 'Сохранить изменения'
        }, 300);
        overlay.style.display = 'block';
        populateFormAddProduct(dataId);
        populateWriteOffMedicines();
      });
    });
  }

  const populateFormAddProduct = (dataId) => {
    const jsonData = getDataFromLocalStorage();
    const medicine = jsonData.Medicines.find(medicine => medicine.ID == dataId);

    if (medicine) {
      document.querySelector('#addproduct-form__name').value = medicine.Name || '';
      document.querySelector('#addproduct-form__dosage').value = medicine.Dosage || '';
      document.querySelector('#addproduct-form__description').value = medicine.Description || '';
      document.querySelector('#addproduct-form__date-of-manufacture').value = medicine.StartDate || '';
      document.querySelector('#addproduct-form__expiration-date').value = medicine.EndDate || '';
      document.querySelector('#addproduct-form__quantity').value = medicine.Quantity || '';
      document.querySelector('#addproduct-form__rack').value = medicine.Rack || '';
      document.querySelector('#addproduct-form__shelf').value = medicine.Shelf || '';
      document.querySelector('#addproduct-form__price').value = medicine.Price.toFixed(2) || '';

      console.log(medicine.SupplierID, jsonData.Suppliers);

      const providerSelect = document.querySelector('#addproduct-form__provider');
      providerSelect.value = medicine.SupplierID;

      if (medicine.PrescriptionRequired) {
        document.querySelector('#addproduct-form__recept1').checked = true; // Нужен
        document.querySelector('#addproduct-form__recept2').checked = false; // Не нужен
      } else {
        document.querySelector('#addproduct-form__recept1').checked = false; // Нужен
        document.querySelector('#addproduct-form__recept2').checked = true; // Не нужен
      }
    } else {
      console.error('Медикамент не найден:', dataId);
    }
  }

  const deleteMedicin = (dataId) => {
    let jsonData = getDataFromLocalStorage();
    jsonData.Medicines = jsonData.Medicines.filter(med => med.ID != dataId);
    saveDataToLocalStorage(jsonData);
    populateTable();
    populateWriteOffMedicines();
    userIdToDelete = null
  };

  const addEventListenerCreateDel = (btn) => {
    btn.forEach(el => {
      el.addEventListener('click', (e) => {
        const targetButton = e.target;
        const dataId = targetButton.dataset.id;

        openConfirmationModal('medicin', dataId);
      });
    });
  }

  const paginationNumberCreate = (startPage, doodOne, nowPage, doodTwo, lastPage) => {

    if (nowPageOnTable == 1) {
      startPage.style.visibility = 'hidden'
      startPage.style.pointerEvents = 'none'
    } else {
      startPage.style.visibility = 'visible'
      startPage.style.pointerEvents = 'all'
      startPage.textContent = 1
    }
    if (maxPageOnTable > 1) {
      lastPage.style.visibility = 'visible'
      lastPage.style.pointerEvents = 'all'
      lastPage.textContent = maxPageOnTable
    } else {
      lastPage.style.visibility = 'hidden'
      lastPage.style.pointerEvents = 'none'
    }
    if (maxPageOnTable > 2) {
      doodTwo.style.visibility = 'visible'
    } else {
      doodTwo.style.visibility = 'hidden'
    }
    if (nowPageOnTable > 2) {
      doodOne.style.visibility = 'visible'
    } else {
      doodOne.style.visibility = 'hidden'
    }
    if (nowPageOnTable !== 1 && maxPageOnTable !== 1) {
      startPage.style.visibility = 'visible'
      startPage.style.pointerEvents = 'all'
    }
    if (nowPageOnTable == maxPageOnTable) {
      lastPage.style.visibility = 'hidden'
      lastPage.style.pointerEvents = 'none'
      doodTwo.style.visibility = 'hidden'
    }

  }

  const getOrderCountForToday = (jsonData) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const todayDate = Number(`${year}${month}${day}`);
    return jsonData.Orders.filter(order => order.ID.toString().startsWith(todayDate)).length;
  }

  const addProductInOrder = (id) => {
    let orderItem = []
    if (localStorage.getItem('orderItem')) {
      orderItem = JSON.parse(localStorage.getItem('orderItem'))
    }
    let per = orderItem.find(obj => obj.ID === id) !== undefined;

    if (per) {
      orderItem.forEach((med) => {
        if (med.ID == id) {
          med.Quantity += 1
        }
      })
    } else {
      orderItem.push({
        ID: id,
        Quantity: 1
      })
    }
    localStorage.setItem('orderItem', JSON.stringify(orderItem))
    loadOrderPage()
  }

  const loadOrderPage = () => {
    const orderItem = JSON.parse(localStorage.getItem('orderItem'));
    const jsonData = getDataFromLocalStorage();
    const tableBody = document.querySelector('#order-staff-table tbody')
    tableBody.innerHTML = ''
    let totalPrice = 0
    orderItem.forEach(medicine => {
      let product = jsonData.Medicines.find((med) => med.ID == medicine.ID)
      if (medicine.Quantity < 1) return
      const row = document.createElement('tr');
      totalPrice += product.Price * medicine.Quantity
      row.innerHTML = `
              <td class="id id-orderlog">${product.ID}</td>
              <td class="title">${product.Name}</td>
              <td class="shelflife">${product.EndDate}</td>
              <td class="supplier">${getSupplierName(product.SupplierID, jsonData.Suppliers)}</td>
              <td class="price">${product.Price}</td>
              <td class="stock">
                <span span class="minus" data-id='${medicine.ID}'>-</span> 
                <span class="quality" >${medicine.Quantity}</span> 
                <span class="plus" data-id='${medicine.ID}' style='visibility:${medicine.Quantity == product.Quantity ? 'hidden' : 'visible'}; pointerEvents:${medicine.Quantity == product.Quantity ? 'none' : 'all'}'>+</span>
              </td>
              <td class="price">${product.Price * medicine.Quantity}</td>
              <td class="icons">
                  <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn" data-id='${medicine.ID}'>
              </td>
        `
      tableBody.appendChild(row);
    })

    document.querySelector('.container__order-btn .sum').textContent = totalPrice != 0 ? totalPrice.toFixed(2) : '0.00';

    document.querySelector('.container__order-btn .delete-order').addEventListener('click', () => {
      localStorage.setItem('orderItem', JSON.stringify([]))
      loadOrderPage()
    })

    document.querySelector('.container__order-btn .add-order').addEventListener('click', () => {
      if (tableBody.innerHTML == '') return
      let orderItem = JSON.parse(localStorage.getItem('orderItem'));
      let jsonData = getDataFromLocalStorage();
      let medicines = [];

      orderItem.forEach((product) => {
        jsonData.Medicines.forEach(medicament => {
          if (Number(medicament.ID) !== Number(product.ID)) return
          medicines.push({
            "MedicineName": medicament.Name,
            "Price": medicament.Price,
            "Quantity": product.Quantity
          });
          medicament.Quantity -= product.Quantity;

          if (medicament.Quantity == 0) {
            const notify = NotificationsCreate('quality', medicament);
            console.log(notify);

            const exists = jsonData.Notifications.some(n => n.Message === notify.Message);
            if (!exists) {
              jsonData.Notifications.push(notify);
              localStorage.setItem('appData', JSON.stringify(jsonData));
              NotificationsGenerate();
            }
          }
        });
      });

      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');

      const todayDate = Number(`${year}${month}${day}`);
      const orderCountToday = getOrderCountForToday(jsonData);
      const orderID = Number(`${todayDate}${orderCountToday + 1}`);

      const userSession = JSON.parse(localStorage.getItem('userSession'));

      const orderItems = {
        "ID": orderID,
        "Medicines": medicines
      };

      if (jsonData.Orders.some(obj => obj.ID === orderItems.ID)) {
        return;
      }

      jsonData.Orders.push(orderItems);

      const jurnalItem = {
        "ID": orderID,
        "OrderID": orderID,
        "User": userSession ? userSession.FullName : 'Неизвестный пользователь',
        "Date": now.toISOString().split('T')[0],
        "Time": [
          String(now.getHours()).padStart(2, '0'),
          String(now.getMinutes()).padStart(2, '0'),
          String(now.getSeconds()).padStart(2, '0')
        ].join(':')
      };

      if (jsonData.ReceiptJournal.some(obj => obj.ID === jurnalItem.ID)) {
        return;
      }

      jsonData.ReceiptJournal.push(jurnalItem);

      tableBody.innerHTML = '';

      localStorage.setItem('appData', JSON.stringify(jsonData))
      localStorage.setItem('orderItem', JSON.stringify([]))
      loadOrderPage()
    })

    const btnsDelete = tableBody.querySelectorAll('.delete-btn')
    btnsDelete.forEach((btnDelete) => {
      btnDelete.addEventListener('click', (e) => {
        const productID = Number(e.target.dataset.id)
        let orderItem = JSON.parse(localStorage.getItem('orderItem'));
        let UpdeatOrderItem = orderItem.filter(obj => Number(obj.ID) !== productID);
        localStorage.setItem('orderItem', JSON.stringify(UpdeatOrderItem))
        loadOrderPage()
      })
    })

    const btnsMinus = tableBody.querySelectorAll('.minus')
    btnsMinus.forEach((btnMinus) => {
      btnMinus.addEventListener('click', (e) => {
        const productID = Number(e.target.dataset.id)
        let orderItem = JSON.parse(localStorage.getItem('orderItem'));
        orderItem.forEach((med) => {
          if (Number(med.ID) == productID) {
            med.Quantity -= 1
          }
        })
        localStorage.setItem('orderItem', JSON.stringify(orderItem))
        loadOrderPage()
      })
    })

    const btnsPlus = tableBody.querySelectorAll('.plus')
    btnsPlus.forEach((btnPlus) => {
      btnPlus.addEventListener('click', (e) => {
        const productID = Number(e.target.dataset.id)
        let orderItem = JSON.parse(localStorage.getItem('orderItem'));
        orderItem.forEach((med) => {
          if (Number(med.ID) == productID) {
            med.Quantity += 1
          }
        })
        localStorage.setItem('orderItem', JSON.stringify(orderItem))
        loadOrderPage()
      })
    })

  }

  const truncateDescription = (medicine, maxLength = 50) => {
    let description = medicine.Description;
    if (description.length > maxLength) {
      // Находим индекс последнего пробела перед пределом
      let lastSpaceIndex = description.lastIndexOf(' ', maxLength - 3);
      // Если пробел найден, обрезаем строку до этого места
      if (lastSpaceIndex !== -1) {
        description = description.substring(0, lastSpaceIndex);
      } else {
        // Если пробела нет, просто обрезаем до максимальной длины
        description = description.substring(0, maxLength - 3);
      }
      description += '...'; // Добавляем многоточие
    }
    return description;
  }

  // Заполнение таблицы медикаментов
  const populateTable = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;
    const tableHead = document.querySelector('#table-inventory thead');
    const tableBody = document.getElementById('medicines-table-body');
    tableBody.innerHTML = '';
    maxPageOnTable = Math.ceil(jsonData.Medicines.length / restrictionOfElements)

    const userSession = JSON.parse(localStorage.getItem('userSession'))

    let pageMed = jsonData.Medicines.slice(((restrictionOfElements * nowPageOnTable) - restrictionOfElements), nowPageOnTable === maxPageOnTable ? jsonData.Medicines.length : (restrictionOfElements * nowPageOnTable))

    const arrowBack = document.querySelector(`#table-inventory .arrow-back`)
    arrowBack.style.visibility = 'hidden'
    arrowBack.style.pointerEvents = 'none'

    const startPage = document.querySelector(`#table-inventory .start-page`)
    const doodOne = document.querySelector(`#table-inventory .dood-one`)
    const nowPage = document.querySelector(`#table-inventory .now-page`)
    const doodTwo = document.querySelector(`#table-inventory .dood-two`)
    const lastPage = document.querySelector(`#table-inventory .last-page`)

    startPage.textContent = ''
    nowPage.textContent = nowPageOnTable

    startPage.addEventListener('click', () => {
      nowPageOnTable = 1
      populateTable()
    })
    lastPage.addEventListener('click', () => {
      nowPageOnTable = maxPageOnTable
      populateTable()
    })

    const arrowNext = document.querySelector(`#table-inventory .arrow-next`)
    if (maxPageOnTable > 1) {
      arrowNext.style.visibility = 'visible'
      arrowNext.style.pointerEvents = 'all'
    } else {
      arrowNext.style.visibility = 'hidden'
      arrowNext.style.pointerEvents = 'none'
    }
    if (maxPageOnTable == nowPageOnTable) {
      arrowNext.style.visibility = 'hidden'
      arrowNext.style.pointerEvents = 'none'
    }
    if (nowPageOnTable > 1) {
      arrowBack.style.visibility = 'visible'
      arrowBack.style.pointerEvents = 'all'
    } else {
      arrowBack.style.visibility = 'hidden'
      arrowBack.style.pointerEvents = 'none'
    }

    paginationNumberCreate(startPage, doodOne, nowPage, doodTwo, lastPage)

    if (pageMed.length == 0 && nowPageOnTable !== 1) {
      nowPageOnTable -= 1
      maxPageOnTable = Math.ceil(jsonData.Medicines.length / restrictionOfElements)
      pageMed = jsonData.Medicines.slice(((restrictionOfElements * nowPageOnTable) - restrictionOfElements), nowPageOnTable === maxPageOnTable ? jsonData.Medicines.length : (restrictionOfElements * nowPageOnTable))
    }

    if (userSession.Role === 'staff') {
      document.querySelector('.container__btn-search .add-product').style.display = 'none'
      document.querySelector('.container__btn-search').style.justifyContent = 'right'
      tableHead.innerHTML = `
        <tr>
            <td class="id id-inventory" data-name="ID">ID</td>
            <td class="title" data-name="Name">Наименование</td>
            <td class="description" data-name="Description">Описание</td>
            <td class="dosage" data-name="Dosage">Дозировка</td>
            <td class="supplier">Поставщик</td>
            <td class="shelflife" data-name="EndDate">Срок годности</td>
            <td class="shelf">Полка/Стеллаж</td>
            <td class="price" data-name="Price">Цена</td>
            <td class="stock" data-name="Quantity">В наличии</td>
            <td class="receipt">Рецепт</td>
            <td class="icons"></td>
        </tr>
      `
      jsonData.Medicines.forEach(medicine => {
        const row = document.createElement('tr');
        if (pageMed.includes(medicine)) {
          row.style.display = 'flex'
        } else {
          row.style.display = 'none'
        }
        let description = truncateDescription(medicine)
        row.innerHTML = `
              <td class="id id-inventory">${medicine.ID}</td>
              <td class="title">${medicine.Name}</td>
              <td class="description">${description}</td>
              <td class="dosage">${medicine.Dosage}</td>
              <td class="supplier">${getSupplierName(medicine.SupplierID, jsonData.Suppliers)}</td> 
              <td class="shelflife">${medicine.EndDate}</td> 
              <td class="shelf">${medicine.Shelf}/${medicine.Rack}</td>
              <td class="price">${medicine.Price.toFixed(2)} ₽</td> 
              <td class="stock">${medicine.Quantity}</td> 
              <td class="receipt">
                ${medicine.PrescriptionRequired === false ? '' : '<input type="checkbox" class="receipt-check">'}
              </td> 
              <td class="icons">
                <img src="icons/basket.svg" alt="иконка редактирования" class="basket-btn__product" data-id='${medicine.ID}' style="display:${medicine.PrescriptionRequired === false ? 'flex' : 'none'}">
              </td>
          `
        tableBody.appendChild(row);
      });

      const baskets = tableBody.querySelectorAll('.basket-btn__product')
      const receipts = tableBody.querySelectorAll('.receipt-check')

      receipts.forEach(receipt => {
        receipt.addEventListener('change', () => {
          if (receipt.checked) {
            receipt.parentElement.parentElement.querySelector('.icons .basket-btn__product').style.display = 'flex'
          } else {
            receipt.parentElement.parentElement.querySelector('.icons .basket-btn__product').style.display = 'none'
          }
        })
      })

      baskets.forEach(basket => {
        basket.addEventListener('click', (e) => {
          addProductInOrder(e.target.dataset.id)
        })
      })
    } else {
      document.querySelector('.container__btn-search .add-product').style.display = 'flex'
      document.querySelector('.container__btn-search').style.justifyContent = 'space-between'
      tableHead.innerHTML = `
        <tr>
            <td class="id id-inventory" data-name="ID">ID</td>
            <td class="title" data-name="Name">Наименование</td>
            <td class="description" data-name="Description">Описание</td>
            <td class="dosage" data-name="Dosage">Дозировка</td>
            <td class="supplier">Поставщик</td>
            <td class="shelflife" data-name="EndDate">Срок годности</td>
            <td class="shelf">Полка/Стеллаж</td>
            <td class="price" data-name="Price">Цена</td>
            <td class="stock" data-name="Quantity">В наличии</td>
            <td class="icons"></td>
        </tr>
      `
      jsonData.Medicines.forEach(medicine => {
        const row = document.createElement('tr');
        if (pageMed.includes(medicine)) {
          row.style.display = 'flex'
        } else {
          row.style.display = 'none'
        }
        let description = truncateDescription(medicine)

        row.innerHTML = `
              <td class="id id-inventory">${medicine.ID}</td>
              <td class="title">${medicine.Name}</td>
              <td class="description">${description}</td>
              <td class="dosage">${medicine.Dosage}</td>
              <td class="supplier">${getSupplierName(medicine.SupplierID, jsonData.Suppliers)}</td> 
              <td class="shelflife">${medicine.EndDate}</td> 
              <td class="shelf">${medicine.Shelf}/${medicine.Rack}</td>
              <td class="price">${medicine.Price.toFixed(2)} ₽</td> 
              <td class="stock">${medicine.Quantity}</td> 
              <td class="icons">
                  <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn__product" data-id='${medicine.ID}'>
                  <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn__product" data-id='${medicine.ID}'>
              </td>
          `
        tableBody.appendChild(row);
      });

      addEventListenerCreateEdit(tableBody.querySelectorAll('.edit-btn__product'));
      addEventListenerCreateDel(tableBody.querySelectorAll('.delete-btn__product'))
    }

    jsonData.Medicines.forEach(medicine => {
      const expirationDate = new Date(medicine.EndDate);
      const currentDate = new Date();
      let notify;

      if (expirationDate < currentDate) {
        notify = NotificationsCreate('date', medicine);
      } else if (medicine.Quantity === 0) {
        notify = NotificationsCreate('quality', medicine);
      }

      if (notify) {
        const exists = jsonData.Notifications.some(n => n.Message === notify.Message);

        if (!exists) {
          jsonData.Notifications.push(notify);
          localStorage.setItem('appData', JSON.stringify(jsonData));
          NotificationsGenerate();
        }
      }
    });

    sortMedicineOptionCreate();
  }

  const populateSupplierDropdown = (suppliers) => {
    const providerSelect = document.getElementById('addproduct-form__provider');
    const providerNewSection = document.querySelector('.provider-add');

    providerSelect.innerHTML = `
        <option value="">Выберите поставщика</option>
        <option value="newProvider">Добавить поставщика</option>
    `;

    suppliers.forEach(supplier => {
      const option = document.createElement('option');
      option.value = supplier.ID;
      option.textContent = supplier.Name;
      providerSelect.appendChild(option);
    });

    providerSelect.addEventListener('change', () => {
      providerNewSection.style.display = providerSelect.value === 'newProvider' ? 'flex' : 'none';
    });
  }

  const sortMedicineOptionCreate = () => {
    const tableInventoryHead = document.getElementById('table-inventory').querySelectorAll('thead tr td');
    const sortContainer = document.getElementById('filter-column-select');

    sortContainer.innerHTML = '';

    tableInventoryHead.forEach(name => {
      if (name.textContent === '' || name.textContent === 'ID' || name.textContent === 'Описание' || name.textContent === 'Дозировка' || name.textContent === 'Полка/Стеллаж' || name.textContent === 'Поставщик') return;

      const option = document.createElement('option');
      option.value = name.dataset.name;
      option.textContent = name.textContent;
      sortContainer.append(option);
    });

    document.getElementById('apply-filter-sort').addEventListener('click', () => {
      if (!document.querySelector('.page__inventory').classList.contains('roboto-bold')) return
      const selectedColumn = sortContainer.value;
      const selectedOrder = document.getElementById('sort-select').value;

      let jsonData = getDataFromLocalStorage();

      if (!jsonData || !jsonData.Medicines) {
        console.error("Нет данных для сортировки");
        return;
      }

      const sortedData = sortTableMedecine(jsonData.Medicines, selectedColumn, selectedOrder);

      jsonData.Medicines = sortedData;

      saveDataToLocalStorage(jsonData);
      populateTable();
      filterModal.style.display = "none";
    });

    document.getElementById('reset-filter-sort').addEventListener('click', () => {
      let jsonData = getDataFromLocalStorage();
      const sortedData = sortTableMedecine(jsonData.Medicines, 'ID', 'asc');

      jsonData.Medicines = sortedData;

      saveDataToLocalStorage(jsonData);
      populateTable();
      filterModal.style.display = "none";
    });
  };

  const sortTableMedecine = (medicines, column, order) => {
    console.log(column);

    return medicines.sort((a, b) => {
      let aValue = a[column];
      let bValue = b[column];


      if (aValue === undefined || bValue === undefined) {
        console.error(`Неизвестный столбец: ${column}`);
        return 0;
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
        return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else if (typeof aValue === 'number') {
        return order === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  };

  const searchMedicines = () => {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase().trim();
    const tableBody = document.getElementById('medicines-table-body');
    const rows = tableBody.getElementsByTagName('tr');

    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName('td');
      let rowContainsSearchTerm = false;

      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, '').includes(filter.replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, ''))) {
          rowContainsSearchTerm = true;
        }
      });

      row.style.display = rowContainsSearchTerm ? '' : 'none';
    });
  };

  if (window.location.pathname.includes('inventoryPage.html')) {
    populateTable();
    populateSupplierDropdown(getDataFromLocalStorage().Suppliers)
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const maxDate = `${year}-${month}-${day}`;
  document.querySelector('#addproduct-form__date-of-manufacture').setAttribute('max', maxDate);

  const addOrUpdateMedicine = (event) => {
    event.preventDefault();
    let errorMessage = '';

    const name = document.querySelector('#addproduct-form__name').value.trim();
    const dosage = document.querySelector('#addproduct-form__dosage').value.trim();
    const description = document.querySelector('#addproduct-form__description').value.trim();
    const startDate = document.querySelector('#addproduct-form__date-of-manufacture').value;
    const endDate = document.querySelector('#addproduct-form__expiration-date').value;
    const quantity = parseInt(document.querySelector('#addproduct-form__quantity').value);
    const rack = document.querySelector('#addproduct-form__rack').value.trim();
    const shelf = document.querySelector('#addproduct-form__shelf').value.trim();
    const price = parseFloat(document.querySelector('#addproduct-form__price').value);
    const supplierID = parseInt(document.querySelector('#addproduct-form__provider').value);
    const prescriptionRequired = document.querySelector('#addproduct-form__recept1').checked || false;

    // Валидация
    if (!name || !dosage || !startDate || !endDate || isNaN(quantity) || !rack || !shelf || isNaN(price) || isNaN(supplierID)) {
      errorMessage += 'Пожалуйста, заполните все обязательные поля.<br>';
    }

    if (quantity <= 0) {
      errorMessage += 'Количество должно быть больше 0.<br>';
    }

    if (price <= 0) {
      errorMessage += 'Цена должна быть больше 0.<br>';
    }

    // Отображение ошибок
    const errorDisplay = document.getElementById('error-message__user');

    if (errorMessage) {
      errorDisplay.innerHTML = errorMessage;
      errorDisplay.style.color = '#21484D';
      errorDisplay.style.display = 'flex';
      return;
    } else {
      errorDisplay.style.display = 'none';
    }
    setTimeout(() => {
      gebridMenu.style.width = '133px';
      gebridMenuClose.style.display = 'none';
      formAddProduct.style.display = 'none';
      formTitle.style.display = 'none';
      overlay.style.display = 'none';
      document.getElementById('error-message__user').style.display = 'none';
      document.querySelector('.form__add-product .btn').textContent = 'Добавить продукт'
      formAddProduct.reset()
    }, 2000);

    const jsonData = getDataFromLocalStorage();

    const formElement = document.querySelector('.form__add-product');
    const dataId = formElement.getAttribute('data-id');

    const maxIdObject = jsonData.Medicines.reduce((prev, current) => {
      return (prev.id > current.id) ? prev : current;
    });

    const newMedicine = {
      ID: dataId ? parseInt(dataId) : maxIdObject.ID + 1,
      Name: name,
      Dosage: dosage,
      Description: description,
      StartDate: startDate,
      EndDate: endDate,
      Quantity: quantity,
      Rack: rack,
      Shelf: shelf.toUpperCase(),
      Price: price,
      SupplierID: supplierID,
      PrescriptionRequired: prescriptionRequired 
    };

    if (dataId) {
      const index = jsonData.Medicines.findIndex(medicine => medicine.ID === parseInt(dataId));
      if (index !== -1) {
        jsonData.Medicines[index] = newMedicine;
        alert('Медикамент успешно обновлён!');
      } else {
        console.error('Медикамент не найден:', dataId);
      }
    } else {
      jsonData.Medicines.push(newMedicine);
      alert('Медикамент успешно добавлен!');
    }

    saveDataToLocalStorage(jsonData);

    formElement.reset();
    document.querySelector('.form__add-product .btn').textContent = 'Добавить продукт'
    formElement.removeAttribute('data-id');
    populateTable()
    searchMedicines()
    populateWriteOffMedicines()
  };

  formAddProduct.addEventListener('submit', addOrUpdateMedicine)



  //                                                   РАБОТА С ПОЛЬЗОВАТЕЛЯМИ ПОЛНАЯ
  const sortUserOptionCreate = () => {
    const tableUsersHead = document.getElementById('users-table').querySelectorAll('thead tr td');
    console.log(tableUsersHead);

    const sortContainer = document.getElementById('filter-column-select');
    console.log(sortContainer);

    sortContainer.innerHTML = '';

    tableUsersHead.forEach(name => {
      if (name.textContent === '' || name.textContent === 'ID') {
        return;
      }

      const option = document.createElement('option');
      option.value = name.dataset.name;
      option.textContent = name.textContent;
      sortContainer.append(option);
    });

    document.getElementById('apply-filter-sort').addEventListener('click', () => {
      if (!document.querySelector('.page__users').classList.contains('roboto-bold')) return

      const selectedColumn = sortContainer.value;
      console.log(selectedColumn);

      const selectedOrder = document.getElementById('sort-select').value;

      let jsonData = getDataFromLocalStorage();

      if (!jsonData || !jsonData.Users) {
        console.error("Нет данных для сортировки");
        return;
      }

      const sortedData = sortTableUsers(jsonData.Users, selectedColumn, selectedOrder);

      jsonData.Users = sortedData;

      saveDataToLocalStorage(jsonData);
      populateUsersTable();
      filterModal.style.display = "none";
    });

    document.getElementById('reset-filter-sort').addEventListener('click', () => {
      let jsonData = getDataFromLocalStorage();
      const sortedData = sortTableUsers(jsonData.Users, 'ID', 'asc');

      jsonData.Users = sortedData;

      saveDataToLocalStorage(jsonData);
      populateUsersTable();
      filterModal.style.display = "none";
    });
  };

  let userIdToDelete = null;
  let medIdToDelete = null;
  let receiptIdToDelete = null

  const openConfirmationModal = (name, id) => {
    const textConfirm = document.getElementById('text-confirm')
    if (name === 'user') {
      userIdToDelete = id;
      textConfirm.textContent = 'Вы уверены, что хотите удалить этого пользователя?'
    } else if (name === 'medicin') {
      medIdToDelete = id
      textConfirm.textContent = 'Вы уверены, что хотите удалить этот продукт?'
    } else if (name === 'exit') {

    } else if (name === 'receipt') {
      receiptIdToDelete = id
      textConfirm.textContent = 'Вы уверены, что хотите удалить этот чек?'
    }
    document.getElementById('confirmation-modal').style.display = 'block';
  };

  document.getElementById('modal-close').onclick = function () {
    document.getElementById('confirmation-modal').style.display = 'none';
    userIdToDelete = null;
    medIdToDelete = null;
    receiptIdToDelete = null;
  };

  document.getElementById('cancel-delete').onclick = function () {
    document.getElementById('confirmation-modal').style.display = 'none';
    userIdToDelete = null;
    medIdToDelete = null;
    receiptIdToDelete = null;
  };

  document.getElementById('confirm-delete').onclick = function () {
    if (userIdToDelete) {
      deleteUser(userIdToDelete);
      document.getElementById('confirmation-modal').style.display = 'none';
      userIdToDelete = null;
    } else if (medIdToDelete) {
      deleteMedicin(medIdToDelete);
      document.getElementById('confirmation-modal').style.display = 'none';
      medIdToDelete = null;
    } else if (receiptIdToDelete) {
      deleteReceipt(receiptIdToDelete);
      document.getElementById('confirmation-modal').style.display = 'none';
      receiptIdToDelete = null;
    }
  };

  const deleteUser = (userId) => {
    let jsonData = getDataFromLocalStorage();

    console.log(userId);

    jsonData.Users = jsonData.Users.filter(user => Number(user.ID) !== Number(userId));
    console.log(jsonData.Users);


    saveDataToLocalStorage(jsonData);
    populateUsersTable();
    userIdToDelete = null
  };

  // Обработчик событий для кнопок удаления в таблице пользователей
  const addEventListenerDeleteUser = (btn) => {
    btn.forEach(el => {
      el.addEventListener('click', (e) => {
        const targetButton = e.target;
        const dataId = targetButton.dataset.id;
        openConfirmationModal('user', dataId);
      });
    });
  };

  // Функция сортировки пользователей
  const sortTableUsers = (users, column, order) => {
    return users.sort((a, b) => {
      let aValue = a[column];
      let bValue = b[column];

      if (aValue === undefined || bValue === undefined) {
        console.error(`Неизвестный столбец: ${column}`);
        return 0;
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
        return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else if (typeof aValue === 'number') {
        return order === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  };

  const searchUsers = () => {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase().trim(); // Получаем текст для поиска
    const tableBody = document.getElementById('users-table-body');
    const rows = tableBody.getElementsByTagName('tr');

    // Перебираем строки и скрываем/показываем их в зависимости от соответствия
    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName('td');
      let rowContainsSearchTerm = false;

      // Проверяем каждую ячейку в строке
      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, '').includes(filter.replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, ''))) {
          rowContainsSearchTerm = true; // Если найдено совпадение
        }
      });

      // Показываем или скрываем строку в зависимости от результата поиска
      row.style.display = rowContainsSearchTerm ? '' : 'none';
    });
  };

  function formatPhoneNumberTable(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    // Форматируем номер
    const formattedNumber = `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
    return formattedNumber;
  }

  const populateUsersTable = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    const tableBody = document.getElementById('users-table-body');
    tableBody.innerHTML = '';
    maxPageOnTable = Math.ceil(jsonData.Users.length / restrictionOfElements)

    let pageUser = jsonData.Users.slice(((restrictionOfElements * nowPageOnTable) - restrictionOfElements), nowPageOnTable === maxPageOnTable ? jsonData.Users.length : (restrictionOfElements * nowPageOnTable))

    if (pageUser.length == 0 && nowPageOnTable !== 1) {
      nowPageOnTable -= 1
      maxPageOnTable = Math.ceil(jsonData.Users.length / restrictionOfElements)
      pageUser = jsonData.Users.slice(((restrictionOfElements * nowPageOnTable) - restrictionOfElements), nowPageOnTable === maxPageOnTable ? jsonData.Users.length : (restrictionOfElements * nowPageOnTable))
    }

    const arrowBack = document.querySelector(`#users-table .arrow-back`)
    arrowBack.style.visibility = 'hidden'
    arrowBack.style.pointerEvents = 'none'

    const startPage = document.querySelector(`#users-table .start-page`)
    const doodOne = document.querySelector(`#users-table .dood-one`)
    const nowPage = document.querySelector(`#users-table .now-page`)
    const doodTwo = document.querySelector(`#users-table .dood-two`)
    const lastPage = document.querySelector(`#users-table .last-page`)

    startPage.textContent = ''
    nowPage.textContent = nowPageOnTable

    startPage.addEventListener('click', () => {
      nowPageOnTable = 1
      populateTable()
    })
    lastPage.addEventListener('click', () => {
      nowPageOnTable = maxPageOnTable
      populateTable()
    })

    const arrowNext = document.querySelector(`#users-table .arrow-next`)
    if (maxPageOnTable > 1) {
      arrowNext.style.visibility = 'visible'
      arrowNext.style.pointerEvents = 'all'
    } else {
      arrowNext.style.visibility = 'hidden'
      arrowNext.style.pointerEvents = 'none'
    }
    if (maxPageOnTable == nowPageOnTable) {
      arrowNext.style.visibility = 'hidden'
      arrowNext.style.pointerEvents = 'none'
    }
    if (nowPageOnTable > 1) {
      arrowBack.style.visibility = 'visible'
      arrowBack.style.pointerEvents = 'all'
    } else {
      arrowBack.style.visibility = 'hidden'
      arrowBack.style.pointerEvents = 'none'
    }

    paginationNumberCreate(startPage, doodOne, nowPage, doodTwo, lastPage)

    jsonData.Users.forEach(user => {

      const row = document.createElement('tr');
      if (pageUser.includes(user)) {
        row.style.display = 'flex'
      } else {
        row.style.display = 'none'
      }

      row.innerHTML = `
            <td class="id id-inventory">${user.ID}</td>
            <td class="name">${user.FullName}</td>
            <td class="role">${user.Role}</td>
            <td class="login">${user.Username}</td>
            <td class="password">${user.Password}</td>
            <td class="phone">${formatPhoneNumberTable(user.Phone)}</td>
            <td class="icons">
                <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn__user" data-id='${user.ID}'>
                <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn__user" data-id='${user.ID}'>
            </td>
        `;

      tableBody.appendChild(row);
    });

    addEventListenerCreateEditUser(tableBody.querySelectorAll('.edit-btn__user'));
    addEventListenerDeleteUser(tableBody.querySelectorAll('.delete-btn__user'));
  }

  // Функция для добавления обработчиков событий на кнопки редактирования
  const addEventListenerCreateEditUser = (btn) => {
    btn.forEach(el => {
      el.addEventListener('click', (e) => {
        const targetButton = e.target;
        const dataId = targetButton.dataset.id; // Получаем ID пользователя
        gebridMenu.style.width = '878px'; // Пример изменения стиля меню
        document.querySelector('.btn-wrap .btn').textContent = 'Добавить пользователя'
        setTimeout(() => {
          gebridMenuClose.style.display = 'block';
          formAddUser.style.display = 'flex';
          formAddUser.dataset.id = dataId; // Устанавливаем ID в атрибут формы
          formTitle.style.display = 'flex';
          formTitle.textContent = 'Редактирование информации о пользователе';
          document.querySelector('.btn-wrap .btn').textContent = 'Сохранить пользователя' // Меняем заголовок формы
        }, 300);
        overlay.style.display = 'block'; // Показываем оверлей
        populateFormEditUser(dataId); // Заполняем форму данными пользователя
      });
    });
  }

  // Функция для заполнения формы редактирования пользователя
  const populateFormEditUser = (dataId) => {
    const jsonData = getDataFromLocalStorage();
    const user = jsonData.Users.find(user => user.ID == dataId);
    document.getElementById('adduser-form').dataset.id = dataId

    if (user) {
      const fullName = user.FullName.split(' ');
      if (fullName.length > 0) {
        document.querySelector('#user-surname').value = fullName[0]; // Фамилия
      }

      if (fullName.length > 1) {
        document.querySelector('#user-name').value = fullName[1]; // Имя
      }

      if (fullName.length > 2) {
        document.querySelector('#user-patronymic').value = fullName[2]; // Отчество
      }
      const roleInputs = document.getElementsByName('user-role');
      roleInputs.forEach(input => {
        input.checked = input.value === user.Role; // Устанавливаем выбранную роль
      });
      document.querySelector('#user-login').value = user.Username || '';
      document.querySelector('#user-password').value = user.Password || '';
      document.querySelector('#user-phone').value = formatPhoneNumber(user.Phone) || '';
    } else {
      console.error('Пользователь не найден:', dataId);
    }
  }

  document.getElementById('adduser-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.getElementById('user-name').value.trim();
    const userSurname = document.getElementById('user-surname').value.trim();
    const userPatronymic = document.getElementById('user-patronymic').value.trim();
    const userPassword = document.getElementById('user-password').value;
    const userPhone = document.getElementById('user-phone').value.replace(/\D/g, '');
    const userLogin = document.getElementById('user-login').value.trim();
    const userRole = document.querySelector('input[name=user-role]:checked');

    // Валидация
    let errorMessage = '';

    if (!userName || !userSurname || !userPassword || !userLogin || !userRole) {
      errorMessage += 'Пожалуйста, заполните все обязательные поля.<br>';
    }

    if (userPhone.length !== 11) {
      errorMessage += 'Телефон должен содержать 11 цифр.<br>';
    }

    if (userPassword.length < 6) {
      errorMessage += 'Пароль должен содержать минимум 6 символов.<br>';
    }

    // Получаем данные пользователей из локального хранилища
    let jsonData = getDataFromLocalStorage();

    let existingUserIndex
    // Проверяем, существует ли пользователь с данным логином
    if (event.target.dataset.id) {
      existingUserIndex = jsonData.Users.findIndex(user => user.ID == event.target.dataset.id);
    } else {
      existingUserIndex = -1
    }

    const errorDisplay = document.getElementById('error-message__user');

    if (errorMessage) {
      errorDisplay.innerHTML = errorMessage;
      errorDisplay.style.color = '#21484D';
      errorDisplay.style.display = 'flex';
    } else {
      const formattedName = capitalizeFirstLetter(userName);
      const formattedSurname = capitalizeFirstLetter(userSurname);
      const formattedPatronymic = capitalizeFirstLetter(userPatronymic);
      document.getElementById('error-message__user').style.display = 'none';


      const newUser = {
        ID: existingUserIndex !== -1 ? jsonData.Users[existingUserIndex].ID : jsonData.Users.length + 1,
        Username: userLogin,
        Password: userPassword,
        Role: userRole.value,
        FullName: `${formattedSurname} ${formattedName} ${formattedPatronymic}`,
        Phone: userPhone
      };

      if (existingUserIndex !== -1) {
        jsonData.Users[existingUserIndex] = newUser;
        setTimeout(() => {
          gebridMenu.style.width = '133px';
          gebridMenuClose.style.display = 'none';
          formAddUser.style.display = 'none';
          formTitle.style.display = 'none';
          overlay.style.display = 'none';
          document.getElementById('error-message__user').style.display = 'none';
          document.querySelector('.btn-wrap .btn').textContent = 'Добавить пользователя'
        }, 2000);
      } else {
        jsonData.Users.push(newUser)
      }

      saveDataToLocalStorage(jsonData)

      errorDisplay.innerHTML = 'Операция выполнена успешно!';
      errorDisplay.style.display = 'flex';
      errorDisplay.style.color = 'white';
      populateUsersTable()
      searchUsers()
      event.target.dataset.id = ''

      this.reset(); // Очищаем форму
    }
  });

  // Функция для преобразования первой буквы в заглавную, остальные — строчные
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  const nameInputs = ['user-name', 'user-surname', 'user-patronymic'];

  nameInputs.forEach(inputId => {
    document.getElementById(inputId).addEventListener('input', function (e) {
      this.value = this.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g, '');
    });
  });

  // Обработчик для форматирования телефона
  document.getElementById('user-phone').addEventListener('input', function (e) {
    let value = this.value.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    let formattedValue = '+7 (';

    if (value.length > 1) {
      formattedValue += value.substring(1, 4);
    }

    if (value.length >= 4) {
      formattedValue += ') ' + value.substring(4, 7);
    }

    if (value.length >= 7) {
      formattedValue += '-' + value.substring(7, 9);
    }

    if (value.length >= 9) {
      formattedValue += '-' + value.substring(9, 11);
    }

    this.value = formattedValue;

    this.setSelectionRange(formattedValue.length, formattedValue.length);
  });

  document.getElementById('user-phone').addEventListener('keydown', function (e) {
    const cursorPosition = this.selectionStart;

    if (cursorPosition <= 4 && (e.key === 'ArrowLeft' || e.key === 'Backspace')) {
      e.preventDefault();
    }

    if (e.key === 'Backspace') {
      e.preventDefault();
      let value = this.value.replace(/\D/g, '');
      if (value.length > 0) {
        value = value.slice(0, -1);
      }
      this.value = formatPhoneNumber(value);
      this.setSelectionRange(this.value.length, this.value.length);
    }
  });

  // Функция для форматирования номера телефона
  const formatPhoneNumber = (value) => {
    let formattedValue = '+7 (';

    console.log(value);

    if (value.length > 1) {
      formattedValue += value.substring(1, 4);
    }

    if (value.length >= 4) {
      formattedValue += ') ' + value.substring(4, 7);
    }

    if (value.length >= 7) {
      formattedValue += '-' + value.substring(7, 9);
    }

    if (value.length >= 9) {
      formattedValue += '-' + value.substring(9, 11);
    }

    return formattedValue;
  }


  if (JSON.parse(localStorage.getItem('userSession')).Role === 'superAdmin') {
    populateUsersTable()
    document.querySelector('.container__btn-search .add-product').style.display = 'none'
  }


  //   //                                               РАБОТА С ЖУРНАЛОМ ПОЛНАЯ
  // Заполнение таблицы журнала заказов
  const populateOrderLogTable = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    const tableBody = document.getElementById('order-log-table-body');

    // Очищаем предыдущие данные
    tableBody.innerHTML = '';

    maxPageOnTable = Math.ceil(jsonData.ReceiptJournal.length / restrictionOfElements)

    let pageReceiptJournal = jsonData.ReceiptJournal.slice(((restrictionOfElements * nowPageOnTable) - restrictionOfElements), nowPageOnTable === maxPageOnTable ? jsonData.ReceiptJournal.length : (restrictionOfElements * nowPageOnTable))

    if (pageReceiptJournal.length == 0 && nowPageOnTable !== 1) {
      nowPageOnTable -= 1
      maxPageOnTable = Math.ceil(jsonData.ReceiptJournal.length / restrictionOfElements)
      pageReceiptJournal = jsonData.ReceiptJournal.slice(((restrictionOfElements * nowPageOnTable) - restrictionOfElements), nowPageOnTable === maxPageOnTable ? jsonData.ReceiptJournal.length : (restrictionOfElements * nowPageOnTable))
    }

    const arrowBack = document.querySelector(`.container__order-log-table .arrow-back`)
    arrowBack.style.visibility = 'hidden'
    arrowBack.style.pointerEvents = 'none'

    const startPage = document.querySelector(`.container__order-log-table .start-page`)
    const doodOne = document.querySelector(`.container__order-log-table .dood-one`)
    const nowPage = document.querySelector(`.container__order-log-table .now-page`)
    const doodTwo = document.querySelector(`.container__order-log-table .dood-two`)
    const lastPage = document.querySelector(`.container__order-log-table .last-page`)

    startPage.textContent = ''
    nowPage.textContent = nowPageOnTable

    startPage.addEventListener('click', () => {
      nowPageOnTable = 1
      populateTable()
    })
    lastPage.addEventListener('click', () => {
      nowPageOnTable = maxPageOnTable
      populateTable()
    })

    const arrowNext = document.querySelector(`.container__order-log-table .arrow-next`)
    if (maxPageOnTable > 1) {
      arrowNext.style.visibility = 'visible'
      arrowNext.style.pointerEvents = 'all'
    } else {
      arrowNext.style.visibility = 'hidden'
      arrowNext.style.pointerEvents = 'none'
    }
    if (maxPageOnTable == nowPageOnTable) {
      arrowNext.style.visibility = 'hidden'
      arrowNext.style.pointerEvents = 'none'
    }
    if (nowPageOnTable > 1) {
      arrowBack.style.visibility = 'visible'
      arrowBack.style.pointerEvents = 'all'
    } else {
      arrowBack.style.visibility = 'hidden'
      arrowBack.style.pointerEvents = 'none'
    }

    paginationNumberCreate(startPage, doodOne, nowPage, doodTwo, lastPage)

    jsonData.ReceiptJournal.forEach(receipt => {

      const row = document.createElement('tr');
      if (pageReceiptJournal.includes(receipt)) {
        row.style.display = 'flex'
      } else {
        row.style.display = 'none'
      }

      const order = jsonData.Orders.find((el) => el.ID == receipt.OrderID)
      let TotalAmount = 0
      order.Medicines.forEach((el) => {
        TotalAmount += el.Price * el.Quantity
      })

      row.innerHTML = `
          <td class="id id-inventory">${receipt.ID}</td>
          <td class="name">${receipt.User}</td> 
          <td class="data">${receipt.Date} ${receipt.Time}</td>
          <td class="total-amount">${TotalAmount.toFixed(2)} руб.</td> 
          <td class="id id-order">${receipt.OrderID}</td> 
          <td class="order">Перейти к заказу</td> 
          <td class="icons">
              <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn" data-id='${receipt.ID}'>
          </td>
      `;

      tableBody.appendChild(row);
    });

    tableBody.querySelectorAll('.delete-btn').forEach(el => {
      el.addEventListener('click', (e) => {
        const targetButton = e.target;
        const dataId = targetButton.dataset.id;
        openConfirmationModal('receipt', dataId);
      });
    });

    document.getElementById('reset-filter-sort').addEventListener('click', () => {
      let jsonData = getDataFromLocalStorage();
      const sortedData = sortTableMedecine(jsonData.Medicines, 'ID', 'asc');

      jsonData.Medicines = sortedData;

      saveDataToLocalStorage(jsonData);
      populateTable();
      populateWriteOffMedicines()
      filterModal.style.display = "none";
    });

    // Обработчик кликов по элементам "Перейти к заказу"
    document.querySelectorAll(".order").forEach((el) => {
      el.addEventListener('click', (event) => {
        if (event.target.classList.contains('order')) {
          const orderId = event.target.closest('tr').querySelector('.id-order').textContent;

          // Отображаем нужные контейнеры и скрываем остальные
          toggleVisibility([orderChekTable, containerOrderCheck], [
            usersTable, addUsersBtn, inventoryTable,
            addProductBtn, cancellationTable, containerOrderBtn,
            orderStaffTable, , backReceiptBtn, orderLogTable
          ]);

          // Обновляем стиль кнопки поиска
          containerBtnSearch.style.display = 'none';

          // Обновляем активную страницу в навигации
          highlightActivePage('Журнал чеков');

          // Дополнительный код для отображения элементов
          containerOrderCheck.style.display = "flex";
          orderChekTable.style.display = "flex";
          backReceiptBtn.style.display = 'flex';
          loadOrderData(orderId);
        }
      });
    });

    searchReceipt()
  }

  const deleteReceipt = (dataId) => {
    let jsonData = getDataFromLocalStorage();
    jsonData.ReceiptJournal = jsonData.ReceiptJournal.filter(rec => rec.ID != dataId);
    saveDataToLocalStorage(jsonData);
    populateOrderLogTable()
    receiptIdToDelete = null
  };

  // Функция для получения полного имени пользователя по его ID
  const getFullName = (userId, users) => {
    const user = users.find(u => u.ID === userId);
    return user ? user.FullName : 'Удаленный пользователь';
  }

  // Функция для загрузки данных в таблицу и информацию о чеке
  const loadOrderData = (orderID) => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    // Находим заказ по ID
    const order = jsonData.Orders.find(o => Number(o.ID) === Number(orderID));
    const receipt = jsonData.ReceiptJournal.find(r => Number(r.OrderID) === Number(orderID));

    if (!order || !receipt) return;

    const tableBody = document.getElementById('order-chek-table-body')
    const orderCheckInfo = document.querySelector('.order-check__cap');


    // Очищаем предыдущие данные в таблице чека
    tableBody.innerHTML = '';

    // Заполнение таблицы медикаментов
    let totalPriceOrder = 0

    maxPageOnTable = Math.ceil(order.Medicines.length / restrictionOfElements)

    let pageOrder = order.Medicines.slice(((restrictionOfElements * nowPageOnTable) - restrictionOfElements), nowPageOnTable === maxPageOnTable ? order.Medicines.length : (restrictionOfElements * nowPageOnTable))
    if (pageOrder.length == 0 && nowPageOnTable !== 1) {
      nowPageOnTable -= 1
      maxPageOnTable = Math.ceil(order.Medicines.length / restrictionOfElements)
      pageOrder = order.Medicines.slice(((restrictionOfElements * nowPageOnTable) - restrictionOfElements), nowPageOnTable === maxPageOnTable ? order.Medicines.length : (restrictionOfElements * nowPageOnTable))
    }
    if (nowPageOnTable === maxPageOnTable) {
      arrowsNext.forEach(a => {
        a.style.visibility = 'hidden'
        a.style.pointerEvents = 'none'
      })
    }

    pageOrder.forEach(medicine => {
      const row = document.createElement('tr');

      const totalPrice = Number((medicine.Price * medicine.Quantity).toFixed(2));
      totalPriceOrder += totalPrice

      row.innerHTML = `
          <td class="title">${medicine.MedicineName}</td>
          <td class="price">${medicine.Price} ₽</td>
          <td class="stock">${medicine.Quantity}</td>
          <td class="price">${totalPrice} ₽</td>
      `;

      tableBody.appendChild(row);
    });

    // Заполнение информации о чеке
    const user = jsonData.Users.find(u => u.ID === receipt.UserID);
    orderCheckInfo.innerHTML = `
    Информация о чеке:
    <span class="roboto-bold">${receipt.OrderID}</span>
    <span class="roboto-bold">${receipt.User}</span>
    <span class="roboto-bold">${receipt.Date} ${receipt.Time}</span>
    <span class="roboto-bold">${totalPriceOrder.toFixed(2)} ₽</span>
`;

    document.querySelector('.container__order-chek-table').style.display = 'block';
  }

  const searchReceipt = () => {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase().trim(); // Получаем текст для поиска
    const tableBody = document.getElementById('order-log-table-body');
    const rows = tableBody.getElementsByTagName('tr');

    // Перебираем строки и скрываем/показываем их в зависимости от соответствия
    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName('td');
      let rowContainsSearchTerm = false;

      // Проверяем каждую ячейку в строке
      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, '').includes(filter.replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, ''))) {
          rowContainsSearchTerm = true; // Если найдено совпадение
        }
      });

      // Показываем или скрываем строку в зависимости от результата поиска
      row.style.display = rowContainsSearchTerm ? '' : 'none';
    });
  };

  const sortReceiptOptionCreate = () => {
    const tableHead = document.querySelector('.container__order-log-table').querySelectorAll('table thead tr td');

    const sortContainer = document.getElementById('filter-column-select');

    sortContainer.innerHTML = ''; // Очищаем предыдущие опции

    tableHead.forEach(name => {
      if (name.textContent === '' || name.textContent === 'ID' || name.textContent === 'Общая сумма(руб.)' || name.textContent === 'Просмотр заказа') {
        return; // Пропускаем пустые заголовки и ID
      }

      const option = document.createElement('option');
      option.value = name.dataset.name; // Устанавливаем значение
      option.textContent = name.textContent; // Устанавливаем текст
      sortContainer.append(option); // Добавляем опцию в select

    });

    document.getElementById('apply-filter-sort').addEventListener('click', () => {
      if (!document.querySelector('.page__receipt-log').classList.contains('roboto-bold')) return

      const selectedColumn = sortContainer.value;

      const selectedOrder = document.getElementById('sort-select').value;

      let jsonData = getDataFromLocalStorage();

      if (!jsonData || !jsonData.ReceiptJournal) {
        console.error("Нет данных для сортировки");
        return;
      }

      const sortedData = sortTableMedecine(jsonData.ReceiptJournal, selectedColumn, selectedOrder);

      jsonData.ReceiptJournal = sortedData;

      saveDataToLocalStorage(jsonData); // Сохраняем отсортированные данные
      populateOrderLogTable(); // Обновляем таблицу после сортировки
      filterModal.style.display = "none"; // Закрываем модальное окно
    });

    document.getElementById('reset-filter-sort').addEventListener('click', () => {
      let jsonData = getDataFromLocalStorage();
      const sortedData = sortTableMedecine(jsonData.ReceiptJournal, 'ID', 'asc'); // Сортируем по ID по возрастанию

      jsonData.ReceiptJournal = sortedData;

      saveDataToLocalStorage(jsonData); // Сохраняем данные
      populateOrderLogTable(); // Обновляем таблицу пользователей
      filterModal.style.display = "none"; // Закрываем модальное окно
    });
  };

  //                                                   РАБОТА СО СПИСАНИЕМ ПОЛНАЯ

  const populateWriteOffMedicines = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    const tableBody = document.getElementById('medicines-write-off-table-body');
    tableBody.innerHTML = ''
    const currentDate = new Date();

    const filteredMedicines = jsonData.Medicines.filter(medicine => {
      const expirationDate = new Date(medicine.EndDate);
      return expirationDate < currentDate || medicine.Quantity === 0;
    });

    maxPageOnTable = Math.ceil(filteredMedicines.length / restrictionOfElements)

    let pageFilteredMedicines = filteredMedicines.slice(((restrictionOfElements * nowPageOnTable) - restrictionOfElements), nowPageOnTable === maxPageOnTable ? filteredMedicines.length : (restrictionOfElements * nowPageOnTable))

    if (filteredMedicines.length == 0 && nowPageOnTable !== 1) {
      nowPageOnTable -= 1
      maxPageOnTable = Math.ceil(filteredMedicines.length / restrictionOfElements)
      pageFilteredMedicines = filteredMedicines.slice(((restrictionOfElements * nowPageOnTable) - restrictionOfElements), nowPageOnTable === maxPageOnTable ? filteredMedicines.length : (restrictionOfElements * nowPageOnTable))
    }

    const arrowBack = document.querySelector(`#medicines-table .arrow-back`)
    arrowBack.style.visibility = 'hidden'
    arrowBack.style.pointerEvents = 'none'

    const startPage = document.querySelector(`#medicines-table .start-page`)
    const doodOne = document.querySelector(`#medicines-table .dood-one`)
    const nowPage = document.querySelector(`#medicines-table .now-page`)
    const doodTwo = document.querySelector(`#medicines-table .dood-two`)
    const lastPage = document.querySelector(`#medicines-table .last-page`)

    startPage.textContent = ''
    nowPage.textContent = nowPageOnTable

    startPage.addEventListener('click', () => {
      nowPageOnTable = 1
      populateTable()
    })
    lastPage.addEventListener('click', () => {
      nowPageOnTable = maxPageOnTable
      populateTable()
    })

    const arrowNext = document.querySelector(`#medicines-table .arrow-next`)
    if (maxPageOnTable > 1) {
      arrowNext.style.visibility = 'visible'
      arrowNext.style.pointerEvents = 'all'
    } else {
      arrowNext.style.visibility = 'hidden'
      arrowNext.style.pointerEvents = 'none'
    }
    if (maxPageOnTable == nowPageOnTable) {
      arrowNext.style.visibility = 'hidden'
      arrowNext.style.pointerEvents = 'none'
    }
    if (nowPageOnTable > 1) {
      arrowBack.style.visibility = 'visible'
      arrowBack.style.pointerEvents = 'all'
    } else {
      arrowBack.style.visibility = 'hidden'
      arrowBack.style.pointerEvents = 'none'
    }

    paginationNumberCreate(startPage, doodOne, nowPage, doodTwo, lastPage)

    filteredMedicines.forEach(medicine => {

      const row = document.createElement('tr');
      if (pageFilteredMedicines.includes(medicine)) {
        row.style.display = 'flex'
      } else {
        row.style.display = 'none'
      }

      row.innerHTML = `
            <td class="id id-inventory">${medicine.ID}</td>
            <td class="title">${medicine.Name}</td>
            <td class="supplier">${getSupplierName(medicine.SupplierID, jsonData.Suppliers)}</td>
            <td class="supplier-contact">${jsonData.Suppliers.find((el) => medicine.SupplierID == el.ID).ContactInfo}</td>
            <td class="shelflife">${medicine.EndDate}</td>
            <td class="shelf">${medicine.Shelf}/${medicine.Rack}</td>
            <td class="price">${medicine.Price.toFixed(2)} ₽</td>
            <td class="stock">${medicine.Quantity}</td>
            <td class="icons">
                <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn" data-id='${medicine.ID}'>
                <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn"  data-id='${medicine.ID}'>
            </td>
        `;

      if (medicine.Quantity == 0) {
        row.querySelector('.stock').style.color = 'red'
      } else {
        row.querySelector('.shelflife').style.color = 'red'
      }

      tableBody.appendChild(row);
    });

    document.getElementById('apply-filter-sort').addEventListener('click', () => {
      if (!document.querySelector('.page__cancellation').classList.contains('roboto-bold')) return
      const sortContainer = document.getElementById('filter-column-select');
      const selectedColumn = sortContainer.value;
      const selectedOrder = document.getElementById('sort-select').value;

      let jsonData = getDataFromLocalStorage();

      if (!jsonData || !jsonData.Medicines) {
        console.error("Нет данных для сортировки");
        return;
      }

      const sortedData = sortTableMedecine(jsonData.Medicines, selectedColumn, selectedOrder);

      jsonData.Medicines = sortedData;

      saveDataToLocalStorage(jsonData);
      populateWriteOffMedicines()
      filterModal.style.display = "none";
    });

    document.getElementById('reset-filter-sort').addEventListener('click', () => {
      let jsonData = getDataFromLocalStorage();
      const sortedData = sortTableMedecine(jsonData.Medicines, 'ID', 'asc');

      jsonData.Medicines = sortedData;

      saveDataToLocalStorage(jsonData);
      populateTable();
      populateWriteOffMedicines()
      filterModal.style.display = "none";
    });

    sortMedicineOptionCreate();
    addEventListenerCreateEdit(tableBody.querySelectorAll('.edit-btn'));
    addEventListenerCreateDel(tableBody.querySelectorAll('.delete-btn'))
  };

  const searchMedicinesWriteOff = () => {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase(); // Получаем текст для поиска
    const tableBody = document.getElementById('medicines-write-off-table-body');
    const rows = tableBody.getElementsByTagName('tr'); // Получаем все строки таблицы

    // Перебираем строки и скрываем/показываем их в зависимости от соответствия
    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName('td');
      let rowContainsSearchTerm = false;

      // Проверяем каждую ячейку в строке
      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().includes(filter)) {
          rowContainsSearchTerm = true; // Если найдено совпадение
        }
      });

      // Показываем или скрываем строку в зависимости от результата поиска
      row.style.display = rowContainsSearchTerm ? '' : 'none';
    });
  };


  document.getElementById('search-input').addEventListener('input', () => {
    searchMedicines()
    searchUsers()
    searchReceipt()
    searchMedicinesWriteOff()
  });

  nowPageOnTableFunctionStart()

}

const buttonLogin = () => {
  const loginInput = document.getElementById('loginInput');
  const passwordInput = document.getElementById('PasswordInput'); // Исправлено имя переменной
  const errorMessage = document.querySelector(".error-message");
  const error = document.querySelector(".error-message .error");

  // Проверка на пустые поля ввода
  if (loginInput.value === '' || passwordInput.value === '') {
    error.textContent = 'Заполните пустые поля';
    errorMessage.style.display = 'flex';
    return;
  }

  // Поиск пользователя в jsonData
  const userNow = jsonData.Users.find(el => el.Username === loginInput.value && el.Password === passwordInput.value);

  if (userNow) {
    errorMessage.style.display = 'none';
    localStorage.setItem('userSession', JSON.stringify(userNow)); // Сохранение данных пользователя в localStorage
    window.location.href = 'inventoryPage.html'; // Переход на страницу инвентаря
  } else {
    error.textContent = 'Неверный логин или пароль';
    errorMessage.style.display = 'flex';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Проверка, если пользователь находится на странице inventoryPage.html
  if (window.location.pathname.includes('inventoryPage.html')) {
    const savedUser = JSON.parse(localStorage.getItem('userSession')); // Получение сохраненного пользователя из localStorage

    if (savedUser) {
      definingTheRole(savedUser); // Определение роли пользователя
    } else {
      // Если пользователь не найден, можно перенаправить на страницу логина
      window.location.href = 'loginPage.html'; // Перенаправление на страницу логина
    }
  }
});

const definingTheRole = (userNow) => {
  const pages = document.querySelectorAll('.page');
  const tableClasses = document.querySelectorAll('.table');

  const addProductBtn = document.querySelector(".add-product");
  const addUsersBtn = document.querySelector(".add-users");

  // Скрытие всех страниц и таблиц
  pages.forEach(el => el.style.display = 'none');
  tableClasses.forEach(el => el.style.display = 'none');

  let parts = userNow.FullName.split(' '); // Разделяем строку по пробелам
  let lastName = parts[0]; // Фамилия - первое слово
  let firstInitial = parts[1][0];
  document.getElementById('name-user').textContent = `${lastName} ${firstInitial}.`
  switch (userNow.Role) {
    case 'superAdmin':
      pages.forEach(el => {
        if (el.textContent.trim() === 'Пользователи') {
          el.style.display = 'block';
          el.classList.add('roboto-bold');
        }
      });

      tableClasses.forEach(el => {
        if (el.classList.contains('container__users-table')) {
          el.style.display = 'flex';
        }
      });

      addProductBtn.style.display = 'none';
      addUsersBtn.style.display = 'flex';
      startProgram(jsonData);
      break;

    case 'admin':
      pages.forEach(el => {
        if (['Пользователи', 'Журнал чеков', 'Запасы', 'Списание'].includes(el.textContent.trim())) {
          el.style.display = 'block';
        }
      });

      tableClasses.forEach(el => {
        if (el.classList.contains('container__inventory-table')) {
          el.style.display = 'flex';
        }
      });

      startProgram(jsonData);
      break;

    case 'staff':
      pages.forEach(el => {
        if (['Оформить заказ', 'Запасы'].includes(el.textContent.trim())) {
          el.style.display = 'block';
        }
      });

      tableClasses.forEach(el => {
        if (el.classList.contains('container__inventory-table')) {
          el.style.display = 'flex';
        }
      });

      startProgram(jsonData);
      break;

    default:
      console.error('Неизвестная роль пользователя:', userNow.Role);
      break;

  }
}