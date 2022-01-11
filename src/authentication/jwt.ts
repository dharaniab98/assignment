import { NextFunction, Response, Request } from 'express';
import { sign, verify } from 'jsonwebtoken';

class JwtToken {
  async generateToken() {
    return sign({ name: 'api_acess_token', iat: Date.now() }, 'secret', {
      expiresIn: '7d',
    });
  }
  async validateToken(req: Request, res: Response, nxt: NextFunction) {
    const token = req.headers['authorization'] || null;
    if (token == null) {
      res.send({ status: 400, message: 'Token Missing' });
    } else {
      await verify(token, 'secret', (err) => {
        if (err) {
          res.send({ status: 403, message: 'Token Invalid' });
        } else {
          nxt();
        }
      });
    }
  }
}

export default new JwtToken();
