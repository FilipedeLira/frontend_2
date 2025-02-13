# Inicializando listas e variáveis
alturas = []
generos = []
soma_altura_m = 0
quantidade_m = 0
quantidade_f = 0

# Coletando dados de 15 pessoas
for i in range(15):
    print(f"\nPessoa {i+1}:")
    altura = float(input("Digite a altura (em metros): "))
    genero = input("Digite o gênero (M para Masculino, F para Feminino): ").strip().upper()

    # Armazenando os dados
    alturas.append(altura)
    generos.append(genero)
    
    # Verificando gênero e acumulando dados
    if genero == 'M':
        soma_altura_m += altura
        quantidade_m += 1
    elif genero == 'F':
        quantidade_f += 1
    else:
        print("Gênero inválido! Considere apenas M ou F.")

# Calculando resultados
maior_altura = max(alturas)
menor_altura = min(alturas)
media_altura_m = soma_altura_m / quantidade_m if quantidade_m > 0 else 0

# Exibindo resultados
print("\nResultados:")
print(f"Maior altura do grupo: {maior_altura:.2f} m")
print(f"Menor altura do grupo: {menor_altura:.2f} m")
print(f"Média de altura do gênero Masculino: {media_altura_m:.2f} m")
print(f"Número de pessoas do gênero Feminino: {quantidade_f}")
