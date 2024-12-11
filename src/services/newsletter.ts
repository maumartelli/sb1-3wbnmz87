interface NewsletterData {
  name: string;
  email: string;
  phone: string;
  acceptTerms: boolean;
}

export async function subscribeToNewsletter(data: NewsletterData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'b1990499-c78d-4941-a3f0-d158c10c136c', // Você precisará se registrar em web3forms.com para obter uma chave
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: 'Nova Inscrição Newsletter Supreme Brasil',
        message: `
          Nome: ${data.name}
          Email: ${data.email}
          Telefone: ${data.phone}
          Aceitou termos: ${data.acceptTerms ? 'Sim' : 'Não'}
        `,
        from_name: "Supreme Brasil Newsletter"
      
      })
    });

    const result = await response.json();
    
    if (result.success) {
      return {
        success: true,
        message: 'Cadastro realizado com sucesso!'
      };
    } else {
      throw new Error('Falha ao enviar formulário');
    }
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    return {
      success: false,
      message: 'Erro ao realizar cadastro. Tente novamente.'
    };
  }
}