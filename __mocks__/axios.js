const axios = {
  get: () => new Promise(res => res({ 
    data: { title: 'Mock with Jest' } 
  }))
}

export default axios
