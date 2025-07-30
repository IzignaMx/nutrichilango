import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Globe, Phone, Mail, Star } from 'lucide-react';

export interface BusinessCardProps {
  name: string;
  category: string;
  logoUrl?: string;
  shortDesc: string;
  location?: string;
  website?: string;
  phone?: string;
  email?: string;
  rating?: number;
  isVerified?: boolean;
  tags?: string[];
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  name,
  category,
  logoUrl,
  shortDesc,
  location,
  website,
  phone,
  email,
  rating,
  isVerified = false,
  tags = []
}) => {
  const handleContactClick = (type: 'website' | 'phone' | 'email', value: string) => {
    switch (type) {
      case 'website':
        window.open(value.startsWith('http') ? value : `https://${value}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`);
        break;
      case 'email':
        window.open(`mailto:${value}`);
        break;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      {/* Image/Logo Section */}
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        {logoUrl ? (
          <img 
            src={logoUrl} 
            alt={`Logo de ${name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        )}
        
        {/* Overlay with category */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
        
        {/* Verified badge */}
        {isVerified && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-primary/80 backdrop-blur-sm">
              <Star className="h-3 w-3 mr-1" />
              Verificado
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {name}
            </CardTitle>
            {location && (
              <CardDescription className="flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3" />
                {location}
              </CardDescription>
            )}
          </div>
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {shortDesc}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Contact Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {website && (
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handleContactClick('website', website)}
                title="Visitar sitio web"
              >
                <Globe className="h-3 w-3" />
              </Button>
            )}
            {phone && (
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handleContactClick('phone', phone)}
                title="Llamar"
              >
                <Phone className="h-3 w-3" />
              </Button>
            )}
            {email && (
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handleContactClick('email', email)}
                title="Enviar correo"
              >
                <Mail className="h-3 w-3" />
              </Button>
            )}
          </div>
          
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
            Ver más
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;