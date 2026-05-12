// API-READY: no direct API call in this UI component
import React from 'react';
import { OrderStatus } from '@/lib/mock/orders';

interface StatusBadgeProps {
  status: OrderStatus;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const configs: Record<OrderStatus, { label: string; badgeClass: string }> = {
    pending: {
      label: 'En attente',
      badgeClass: 'badge-warning',
    },
    processing: {
      label: 'En cours',
      badgeClass: 'badge-info',
    },
    shipped: {
      label: 'Expédiée',
      badgeClass: 'badge-neutral',
    },
    delivered: {
      label: 'Livrée',
      badgeClass: 'badge-success',
    },
    cancelled: {
      label: 'Annulée',
      badgeClass: 'badge-danger',
    },
  };

  const config = configs[status];

  return (
    <span className={`badge ${config.badgeClass}`}>
      <div className="w-1 h-1 rounded-full bg-current opacity-60"></div>
      {config.label}
    </span>
  );
};

export default StatusBadge;
