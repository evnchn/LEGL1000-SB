// 获取模块编号
let moduleNumber = document.querySelector('h1').textContent.trim().split(' ')[1];

// 根据模块编号设置CSV文件的URL
let csvUrl = `https://raw.githubusercontent.com/evnchn/LEGL1000-SB/master/M${moduleNumber}.csv`;

// 使用fetch API获取CSV文件内容
fetch(csvUrl)
  .then(response => response.text())
  .then(data => {
    // 使用split函数按行分割数据，然后使用map函数将每行数据再按逗号分割
    let allQuestionsText = data.split('\n').map(line => line.split(','));

    // 打印第一个问题和答案以进行调试
    console.log('第一个问题:', allQuestionsText[0][0]);
    console.log('第一个问题的答案:', allQuestionsText[0][1]);

    // 遍历所有问题
    allQuestionsText.forEach(([questionText, answerText]) => {
      // 尝试在页面上找到完全匹配的问题
      let questionElement = Array.from(document.querySelectorAll('.question_text')).find(element => element.textContent.trim() === questionText);

      // 如果没有找到完全匹配的问题，再尝试匹配问号前的部分
      if (!questionElement) {
        let questionTextBeforeQuestionMark = questionText.split('?')[0];
        questionElement = Array.from(document.querySelectorAll('.question_text')).find(element => element.textContent.trim().startsWith(questionTextBeforeQuestionMark));
      }

      if (questionElement) {
        // 找到问题后，获取其父元素（问题容器）
        let questionContainer = questionElement.parentElement;

        // 在问题容器内找到所有的答案元素
        let answerElements = questionContainer.querySelectorAll('.answer_label');

        // 打印当前问题框中的问题和所有答案
        console.log('当前问题:', questionElement.textContent.trim());
        console.log('所有答案:', Array.from(answerElements).map(element => element.textContent.trim()));

        // 在答案元素中找到匹配的答案
        let answerElement = Array.from(answerElements).find(element => element.textContent.trim() === answerText);

        if (answerElement) {
          // 找到答案后，获取其父元素（答案容器）
          let answerContainer = answerElement.parentElement;

          // 在答案容器内找到输入元素（单选按钮）并选中它
          let inputElement = answerContainer.querySelector('.question_input');
          inputElement.checked = true;
        }
      }
    });
  });
