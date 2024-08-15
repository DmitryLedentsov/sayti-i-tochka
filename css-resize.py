import re

def modify_css(filename, size_variable='--size'):
  """
  Модифицирует CSS файл, умножая значения в vh и vw на указанную переменную.

  Args:
    filename: Имя входного CSS файла.
    size_variable: Имя CSS переменной для умножения.
  """

  with open(filename, 'r') as f:
    css_data = f.read()

  # Регулярные выражения для поиска значений в vh и vw
  vh_pattern = r'(\d+\.?\d*)(vh)'
  vw_pattern = r'(\d+\.?\d*)(vw)'



  # Замена значений с использованием регулярных выражений
  new_css_data = re.sub(vh_pattern, r'calc(\1vh * var({})'.format(size_variable) + r')', css_data)
  new_css_data = re.sub(vw_pattern, r'calc(\1vw * var({})'.format(size_variable) + r')', new_css_data)

  with open(filename, 'w') as f:
    f.write(new_css_data)

def get_unit(str):
  return 'vw' if 'vw' in str else 'vh'
# Пример использования
modify_css('css/style.css')